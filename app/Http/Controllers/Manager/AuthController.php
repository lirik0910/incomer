<?php

namespace App\Http\Controllers\Manager;

use App\Model\User;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;

class AuthController extends Controller
{

    // TODO: remove when make front admin auth
//    public function register(Request $request)
//    {
//        $validator = Validator::make($request->all(), [
//            'name' => 'required',
//            'email' => 'required|email',
//            'password' => 'required',
//            'c_password' => 'required|same:password',
//        ]);
//        if ($validator->fails()) {
//            return response()->json(['error' => $validator->errors()], 401);
//        }
//
//        $input = $request->all();
//        $input['password'] = bcrypt($input['password']);
//        $input['type'] = 'manager';
//
//        $user = User::create($input);
//
//        $success['token'] = $user->createToken('MyApp')->accessToken;
//        $success['name'] = $user->name;
//
//        return response()->json(['success' => $success], 200);
//    }

    public function login(Request $request)
    {

        if (Auth::attempt([
            'email' => request('email') ?: request('username'),
            'password' => request('password')
        ])) {
            $user = Auth::user();
            $role = $user['type'];

            if($role === 'user') return response()->json(['error' => 'Unauthorised'], 401);

            $allow =config('permissions.roles.'.$role);

            $res['access_token'] = $user->createToken('MyApp',$allow)->accessToken;
            return response()->json( $res, 200);
        } else {
            return response()->json(['error' => 'Auth error'], 401);
        }
    }


}

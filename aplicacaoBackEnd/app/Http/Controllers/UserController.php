<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User;
use App\Http\Requests\UserCreateRequest;
use App\Http\Requests\UserLoginRequest;
use Illuminate\Support\Facades\Auth;

class UserController extends Controller
{
    public function index()
    {
        $data = User::get();
        return $this->sendSuccess("Usuários cadastrados", $data);  
    }

    public function login(UserLoginRequest $request){
        $data = $request->validated();
        if(!Auth::attempt($data))
        {
            return $this->sendError("Usuário ou senha incorretos");
        }
        $user = Auth::user();
        $accessToken = $user->createToken('authToken')->accessToken;
        return $this->sendSuccess("Usuário autenticado com sucesso", $accessToken);
    }

    public function create(UserCreateRequest $request)
    {
        $data = $request->validated();
        $data['password'] = bcrypt($data['password']);
        $cadastro = User::create($data);
        if($cadastro){
            $cadastro->accessToken = $cadastro->createToken('authToken')->accessToken;
            return $this->sendSuccess("Usuário cadastrado com sucesso", $cadastro);
        }else{
            return $this->sendError("Erro ao cadastrar usuário");
        }
    }

    public function update($id, Request $request)
    {
        $data = $request->all();
        $user = User::find($id);
        if(!isset($user)){
            return $this->sendError("Usuário não encontrado", 404);
        }
        $update = $user->update($data);
        if($update){
            return $this->sendSuccess("Usuário atualizado com sucesso");
        }
        else{
            return $this->sendError("Erro ao atualizar usuário");
        }
    }

    public function delete($id)
    {
        $data = User::find($id);
        if(!isset($data)){
            return $this->sendError("Usuário não encontrado", 404);
        }
        $removido = $data->delete();
        if($removido){
            return $this->sendSuccess("Usuário removido com sucesso");
        }else{
            return $this->sendError("Falha ao remover usuário");
        }
    }
}

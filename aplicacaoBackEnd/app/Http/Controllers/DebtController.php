<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Debt;
use Illuminate\Mail\Message;
use Illuminate\Support\Facades\DB;
use Illuminate\Database\Eloquent\Collection;
use App\Http\Requests\DebtCreateRequest;
use Illuminate\Support\Facades\Auth;

class DebtController extends Controller
{
    public function index()
    {
        $debts = Debt::get();
        return $this->sendData($debts);
    }

    public function readAll(){
        $debts = Debt::where('user_id', Auth::id())->get();
        return $this->sendData($debts);
    }

    public function consult($cpf)
    {
        $data = Debt::select('id', 'name', 'cpf', 'value')->where('cpf', $cpf)->get();
        dd($data);
    }

    public function create(DebtCreateRequest $request)
    {
        $data = $request->validated();
        $data['user_id'] = Auth::id();
        $cadastro = Debt::create($data);
        if($cadastro){
            return $this->sendSuccess("Cadastrado com sucesso", $cadastro->id);
        }else{
            return $this->sendError("Falha ao cadastrar débito", $cadastro->id);
        }
    }

    public function delete($id)
    {

        $debt = Debt::find($id);
        if(!isset($debt))
        {
            return $this->sendError("Débito não encontrado", 404);
        }

        if($debt->user_id != Auth::id())
        {
            return $this->sendError("Débito não pode ser alterada", 403);
        } 
        
        $removido = $debt->delete();
        if($removido){
            return $this->sendSuccess("Removido com sucesso");
        }else{
            return $this->sendError("Falha ao remover débito");
        }
    }

    public function update($id, DebtCreateRequest $request)
    {
        $data = $request->validated();
        $debt = Debt::find($id);
        if(!isset($debt))
        {
            return $this->sendError("Débito não encontrado", 404);
        } 
        if($debt->user_id != Auth::id())
        {
            return $this->sendError("Débito não pode ser alterada", 403);
        } 
        $alterado = $debt->update($data);
        if($alterado){
            return $this->sendSuccess("Alterado com sucesso", $id);
        }else{
            return $this->sendError("Falha ao alterar débito");
        }
    
    }
}

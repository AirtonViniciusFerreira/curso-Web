<?php

namespace App\Http\Controllers;

use App\Debt;
use Illuminate\Http\Request;

class ConsultarController extends Controller
{
    public function index()
    {
        $debts = Debt::get();
        return $this->sendData($debts);
    }

    public function create(Request $request)
    {
        $data = $request->all();
        $res = Debt::create($data);
        if($res){
            return $this->sendSuccess("Cadastrado con sucesso.", $res->id);
        }else{
            return $this->sendError("Falha ao cadastrar débito.", $res->id);
        }
    }

    public function increment(REQUEST $request)
    {
        
    }

    
}
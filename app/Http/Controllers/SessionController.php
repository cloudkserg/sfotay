<?php
namespace App\Http\Controllers;
use Illuminate\Http\Request;
use App\Session;
//use SimpleSoftwareIO\QrCode\Facades\QrCode;
class SessionController extends Controller
{

    public function register()
    {
        return view('session/register');
    }


    public function generateQr(Request $request)
    {
        if ($request->get('email', '') == '' and $request->get('phone', '') == '') {
            throw new \Exception('Не указаны контактные данные');
        }

        $email = trim($request->get('email', ''));
        $phone = trim($request->get('phone', ''));
        $session = new Session;
        $session->email = $email;
        $session->phone = $phone;
        $session->ip = $request->getClientIp();
        $session->saveOrFail();
return view('session/generateQr', ['session' => $session]);
    }

}

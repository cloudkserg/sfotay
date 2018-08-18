<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
    <meta name="description" content="" />
    <meta name="viewport" content="width=device-width,initial-scale=1">

    <title>Registration</title>

    <link rel="stylesheet" type="text/css" href="css/bn-registration.css">
</head>

<body>
    <section class="bn-registration">
        <h2 class="bn-registration-title">Регистрация фотосессии</h2>
        <form class="bn-form js-validate-form" action="{{route('session.generate')}}" method="post">
            @csrf
            <div class="bn-form-row">
                <fieldset class="bn-fieldset">
                    <div class="bn-fieldset-row">
                        <input class="bn-text-input" type="email" name="email" placeholder="Эл. почта" required>
                    </div>
                    <div class="bn-fieldset-row">
                        <input class="bn-text-input" type="text" name="phone" placeholder="Телефон (не обязательно)">
                    </div>
                </fieldset>
            </div>
            <div class="bn-form-row">
                <button class="bn-btn bn-btn--primary" type="submit">Получить qr-код</button>
            </div>
        </form>
    </section>

    <script type="text/javascript" src="js/vendor/jquery.min.js"></script>
    <script type="text/javascript" src="js/vendor/icheck.min.js"></script>
    <script type="text/javascript" src="js/vendor/jquery.selectric.min.js"></script>
    <script type="text/javascript" src="js/vendor/jquery.selectric.placeholder.js"></script>
    <script type="text/javascript" src="js/vendor/jquery.selectric.parsley.js"></script>
    <script type="text/javascript" src="js/vendor/jquery.maskedinput.min.js"></script>
    <script type="text/javascript" src="js/vendor/parsley.min.js"></script>
    <script type="text/javascript" src="js/bn-registration-form.js"></script>
</body>

</html>

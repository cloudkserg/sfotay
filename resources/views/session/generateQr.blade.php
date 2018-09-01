<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
    <meta name="description" content="" />
    <meta name="viewport" content="width=device-width,initial-scale=1">

    <title>Code</title>

    <link rel="stylesheet" type="text/css" href="css/bn-registration.css">
</head>

<body>
    <div id="wrapper">
        <img src="data:image/png;base64, {!! base64_encode(QrCode::format('png')->errorCorrection('H')->size('500')->generate($session->id . '////' . $session->email .  '////' . $session->phone)); !!}" />
    </div>
</body>

</html>

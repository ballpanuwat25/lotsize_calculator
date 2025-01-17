$(document).ready(function() {
    let balance = $('#balance').val();
    let risk = $('#risk').val();
    let pipvalue = $('#pipvalue').val();

    let risk_amount = balance * risk / 100;

    $('#stoploss').on('input', function() {
        let stoploss = $(this).val();

        if(stoploss == 0) {
            $('#lotsize').text('0.00');
            return;
        }

        let result = risk_amount / (stoploss * pipvalue);
        $('#lotsize').text(result.toFixed(2));
    });

    $('#calculate').on('click', function() {
        let openprice = $('#openprice').val();
        let stoploss = $('#stoploss_price').val();
        
        let pip = openprice - stoploss;
        pip = Math.abs(pip) * 100;

        let result = risk_amount / (pip * pipvalue);
        $('#lotsize').text(result.toFixed(2));
    });

    $('#eu_stoploss').on('input', function() {
        let stoploss = $(this).val();

        if(stoploss == 0) {
            $('#eu_lotsize').text('0.00');
            return;
        }

        let result = risk_amount / (stoploss * pipvalue);
        $('#eu_lotsize').text(result.toFixed(2));
    });

    $('#eu_calculate').on('click', function() {
        let openprice = $('#eu_openprice').val();
        let stoploss = $('#eu_stoploss_price').val();
        
        let pip = openprice - stoploss;
        pip = Math.abs(pip) * 100000;

        let result = risk_amount / (pip * pipvalue);
        $('#eu_lotsize').text(result.toFixed(2));
    });
});
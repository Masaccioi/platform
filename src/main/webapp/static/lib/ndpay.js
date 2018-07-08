(function () {
    ndPay = function () { };
    ndPay.doPay = function (charge) {
        var result = checkCharge(charge);
        if (result.state == true) {
            var aliParam = charge.data.PayParams;
            aliParam = parseQueryString(aliParam);
            var url = charge.data.PayParams;
            var title = "";
            if (charge.data.Channel == "paypal_wap") {
                title = "PayPal支付";
            } else if (charge.data.Channel == "alipay_wap") {
                title = "支付宝支付";
            }

            if (window.layer == null) {
                window.open(url);
            } else {
                layer.open({
                    type: 2,
                    title: title,
                    area: ['100%','100%'],
                    fix: false, //不固定
                    content: url
                });
            }
        }
    };

    function checkCharge(charge) {
        var result = {};
        if(charge.errorCode == null || 
            charge.msg == null || 
            charge.data == null) {
            result.state = false;
            result.message = "凭证不正确";
            result.code = "102";
            return result;
        }
        if (charge.errorCode != "0" || charge.msg != "ok") {
            result.state = false;
            result.message = "获取支付凭证失败";
            result.code = "103";
            return result;
        }
        if (charge.data.Channel != "paypal_wap" && charge.data.Channel != "alipay_wap") {
            result.state = false;
            result.message = "未开通的支付渠道";
            result.code = "104";
            return result;
        } else {
            if (charge.data.PayParams == null) {
                result.state = false;
                result.message = "支付凭证的支付参数不正确";
                result.code = "105";
                return result;
            }
        }
        result.state = true;
        return result;
    }

    function parseQueryString(string) {
        var obj = {}, pairs = string.split('&'), d = decodeURIComponent, name, value;
        $.each(pairs, function (i, pair) {
            pair = pair.split('=');
            name = d(pair[0]);
            value = d(pair[1]);
            obj[name] = value;
        });
        return obj;
    }
})();
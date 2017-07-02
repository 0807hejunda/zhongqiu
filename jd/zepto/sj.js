/**
 * Created by ÁõÀÚ on 2017/5/26.
 */

$(".box>ul>li>a").tap(
    function () {
        $(this).next(".er").toggle().parent().siblings().find("ul").hide();

        return false;
    }
);

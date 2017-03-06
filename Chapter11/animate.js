/**
 * Created by jf on 2016/7/25.
 */

function animate(obj, target) {
    clearInterval(obj.timer);
    obj.timer = setInterval(function () {
        var leader = obj.offsetLeft;
        var step = 10;
        step = leader < target ? step : -step;
        if (Math.abs(target - leader) >= Math.abs(step)) {
            leader = leader + step;
            obj.style.left = leader + "px";
        } else {
            obj.style.left = target + "px";
            clearInterval(obj.timer);
        }
    }, 15);
}

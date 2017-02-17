/**
 * Created by jf on 2016/8/16.
 */

/**
 * 获取下一个兄弟元素的兼容写法
 * @param element
 * @returns {*}
 */
function getNextElement(element) {
    if (element.nextElementSibling) {
        return element.nextElementSibling;
    } else {
        var next = element.nextSibling;//下一个兄弟节点
        while (next && 1 !== next.nodeType) {//1有 2不是我们想要的
            next = next.nextSibling;
        }
        return next;
    }
}
/**
 * 获取上一个兄弟元素的兼容写法
 * @param element
 * @returns {*}
 */
function getPreviousElement(element) {
    if (element.previousElementSibling) {
        return element.previousElementSibling;
    } else {
        var perv = element.previousSibling;//上一个兄弟节点
        while (perv && 1 !== perv.nodeType) {//1有 2不是我们想要的
            perv = perv.previousSibling;
        }
        return perv;
    }
}
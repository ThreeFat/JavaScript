/**
 * Created by jf on 2016/8/15.
 */

/**
 * 获取内部文本的兼容方法
 * @param element
 * @returns {*}
 */
function getInnerText(element) {
    if (typeof element.innerText === "string") {
        return element.innerText;
    } else {
        return element.textContent
    }
}

/**
 * 设置内部文本的兼容方法
 * @param element
 * @param content
 */
function setInnerText(element, content) {
    if (typeof element.innerText === "string") {
        element.innerText = content;
    } else {
        element.textContent = content;
    }
}
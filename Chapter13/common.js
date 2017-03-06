function my$(id) {
    return document.getElementById(id);
}

function getInnerText(element) {
    if (typeof element.innerText === "string") {
        return element.innerText;
    } else {
        return element.textContent;
    }
}

function setInnerText(element, content) {
    if (typeof element.innerText === "string") {
        element.innerText = content;
    } else {
        element.textContent = content;
    }
}

function getNextElement(element) {
    if (element.nextElementSibling) {
        return element.nextElementSibling;
    } else {
        var el = element.nextSibling;
        while (el && 1 !== el.nodeType) {
            el = el.nextSibling;
        }
        return el;
    }
}

function getPreviousElement(element) {
    if (element.previousElementSibling) {
        return element.previousElementSibling;
    } else {
        var el = element.previousSibling;
        while (el && 1 !== el.nodeType) {
            el = el.previousSibling;
        }
        return el;
    }
}

function getFirstElement(element) {
    if (element.firstElementChild) {
        return element.firstElementChild;
    } else {
        var el = element.firstChild;
        while (el && 1 !== el.nodeType) {
            el = el.nextSibling;
        }
        return el;
    }
}

function getLastElement(element) {
    if (element.lastElementChild) {
        return element.lastElementChild;
    } else {
        var el = element.lastChild;
        while (el && 1 !== el.nodeType) {
            el = el.previousSibling;
        }
        return el;
    }
}

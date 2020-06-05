function email(text) {

    if (text.indexOf("@") != -1
        && text.indexOf(".") != -1
        && text.indexOf(".") < text.indexOf("@")
        && text.lastIndexOf(".") > text.indexOf("@")) {
        return true;
    } else {
        return false
    }
}
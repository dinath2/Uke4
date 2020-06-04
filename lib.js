function fixText(text) {
    fixedTerje = text.replace(/ /g,'');
    return fixedTerje[0].toUpperCase() + fixedTerje.toLowerCase().slice(1);
}
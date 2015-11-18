/**
 * Created by Laggo on 15/11/7.
 */
app.filter('htmlToPlaintext',function(){
    return function (text) {
        return text ? String(text).replace(/<[^>]+>/gm, '') : '';
    }
})
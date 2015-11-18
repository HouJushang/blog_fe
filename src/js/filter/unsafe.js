/**
 * Created by Laggo on 15/11/8.
 */
app.filter('unsafe', function($sce) { return $sce.trustAsHtml; });

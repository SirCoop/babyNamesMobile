/**
 * Created by Sir_Coop on 10/27/2015.
 */
angular.module('babynames').constant('constants',
  {
    namesDirectory: '/_resources/BabyNames.json',
    paginationTemplate: '/views/tpls/pagination.html',
    getAllNames: '/api/names/all',
    getNamesByLetter: '/api/names/all/',
    getNamesBySearch: '/api/names/search/'
  }
);

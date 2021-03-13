$(function () {
    /* AJAX CALL FOR MAIN MENU - START */
    if ($('.header-menu').length > 0) {
        var currRelUrl = _spPageContextInfo.webServerRelativeUrl;
        var jsonData = {}
        var jsonCPObject = JSON.stringify(jsonData);
        $.ajax({
            type: "GET",
            contentType: "application/json; charset=utf-8",
            url: "/_vti_bin/InfosysCMS/InfosysCMSService.svc/GetMainMenu?weburl=" + currRelUrl,
            data: jsonCPObject,
            processData: true,
            success: function (responseData) {
                if (responseData.length > 0) {
                    $('.header-menu').html(responseData);
                }
            },
            error: function (xhr, ajaxOptions, thrownError) {
                LoggingInConsole(xhr.status);
                LoggingInConsole(thrownError);
            }
        });
    }
    /* AJAX CALL FOR MAIN MENU - END */

    /* AJAX CALL FOR BURGER MENU - START */
    if ($('.menu').length) {
        var currPageRelUrl = '';
        currPageRelUrl = _spPageContextInfo.serverRequestPath;
        var signInDesktopHTML = {};
        var jsonCookieObject = JSON.stringify(signInDesktopHTML);
        var burgerHTML = "";
        $.ajax({
            type: "GET",
            contentType: "application/json; charset=utf-8",
            url: "/_vti_bin/InfosysCMS/InfosysCMSService.svc/GetBurgerMenuHTML?relativeUrl=" + currPageRelUrl,
            data: jsonCookieObject,
            dataType: "json",
            processData: true,
            success: function (responseData) {
                $('.menu').append(responseData);
            },
            error: function (xhr, ajaxOptions, thrownError) {
                LoggingInConsole(xhr.status);
                LoggingInConsole(thrownError);
            }
        });
    }
    /* AJAX CALL FOR BURGERMENU - END */

    /* AJAX CALL FOR BREADCRUMB - START */
    var pageRelativeURL = _spPageContextInfo.webServerRelativeUrl;
    var jsonData = {}
    var jsonObject = JSON.stringify(jsonData);
    $.ajax({
        type: "GET",
        contentType: "application/json; charset=utf-8",
        url: "/_vti_bin/InfosysCMS/InfosysCMSService.svc/GetBreadcrumbItems?pageRelativeURL=" + pageRelativeURL,
        data: jsonObject,
        dataType: "json",
        processData: true,
        success: function (responseData) {
            $('.rmv-breadcrum').html(responseData);
            // $("#ShareLoading").css("display", "none");
        },
        error: function (xhr, ajaxOptions, thrownError) {
            LoggingInConsole(xhr.status);
            LoggingInConsole(thrownError);
        },
    });
    /* AJAX CALL FOR BREADCRUMB - END */

});
$(document).ready(function () {
    $('#articleYearFilter').change(function (e) {
        var current = window.location.href;
        var current1 = current.toLowerCase();
        var locYear = $(this).find('option:selected').val();
        var locMedia = $('#articleMediaFilter').find('option:selected').val();
        if (locYear == 'Select Year') {
            locYear = '';
        }
        if (locMedia == 'Select Media') {
            locMedia = '';
        }
        var locAppendYear = encodeURI(locYear);
        var locAppendMedia = encodeURI(locMedia);
        var locTag = getParameterByName('Tag');
        var queryTag = encodeURI(locTag);
        if (locTag == null) {
            queryTag = null;
        }
        if (current1.indexOf('?') != -1) {
            var locSnip = window.location.href.split('?')[0];
			if(locAppendMedia!="undefined")
			{
            if (locAppendYear != '' & locAppendMedia != '' & queryTag != null) {
                window.location.href = locSnip + '?Year=' + locAppendYear + '&Media=' + locAppendMedia + '&Tag=' + queryTag;
            }
            else if (locAppendYear == '' & locAppendMedia == '' & queryTag == null) {
                window.location.href = locSnip;
            }
            else if (locAppendYear == '' & locAppendMedia == '' & queryTag != null) {
                window.location.href = locSnip + '?Tag=' + queryTag;
            }
            else if (locAppendYear != '' & locAppendMedia == '' & queryTag == null) {
                window.location.href = locSnip + '?Year=' + locAppendYear;
            }
            else if (locAppendMedia != '' & locAppendYear == '' & queryTag == null) {
                window.location.href = locSnip + '?Media=' + locAppendMedia;
            }
            else if (locAppendMedia != '' & locAppendYear != '' & queryTag == null) {
                window.location.href = locSnip + '?Media=' + locAppendMedia + '&Year=' + locAppendYear;
            }
            else if (locAppendMedia == '' & locAppendYear != '' & queryTag != null) {
                window.location.href = locSnip + '?Year=' + locAppendYear + '&Tag=' + queryTag;
            }
            else if (locAppendMedia != '' & locAppendYear == '' & queryTag != null) {
                window.location.href = locSnip + '?Media=' + locAppendMedia + '&Tag=' + queryTag;
            }
			}
			else{
				if (locAppendYear != '' & queryTag != null){
					 window.location.href = locSnip + '?Year=' + locAppendYear + '&Tag=' + queryTag;
				}
				else if (locAppendYear == '' & queryTag == null){
					window.location.href = locSnip;
				}
				else if (locAppendYear == '' & queryTag != null) {
                window.location.href = locSnip + '?Tag=' + queryTag;
				}
				else if (locAppendYear != '' & queryTag == null) {
                window.location.href = locSnip + '?Year=' + locAppendYear;
            }
			
			}
			
        }
        else {
            //var locAppend = $(this).find('option:selected').val();
            window.location.href = current + '?Year=' + locAppendYear;
        }

    });
    $('#articleMediaFilter').change(function (e) {

        var current = window.location.href;
        var current1 = current.toLowerCase();
        var locYear = $('#articleYearFilter').find('option:selected').val();
        var locMedia = $(this).find('option:selected').val();
        if (locYear == 'Select Year') {
            locYear = '';
        }
        if (locMedia == 'Select Media') {
            locMedia = '';
        }
        var locAppendYear = encodeURI(locYear);
        var locAppendMedia = encodeURI(locMedia);
        var locTag = getParameterByName('Tag');
        var queryTag = encodeURI(locTag);
        if (locTag == null) {
            queryTag = null;
        }
        if (current1.indexOf('?') != -1) {
            var locSnip = window.location.href.split('?')[0];

            if (locAppendYear != '' & locAppendMedia != '' & queryTag != null) {
                window.location.href = locSnip + '?Year=' + locAppendYear + '&Media=' + locAppendMedia + '&Tag=' + queryTag;
            }
            else if (locAppendYear == '' & locAppendMedia == '' & queryTag == null) {
                window.location.href = locSnip;
            }
            else if (locAppendYear == '' & locAppendMedia == '' & queryTag != null) {
                window.location.href = locSnip + '?Tag=' + queryTag;
            }
            else if (locAppendYear != '' & locAppendMedia == '' & queryTag == null) {
                window.location.href = locSnip + '?Year=' + locAppendYear;
            }
            else if (locAppendMedia != '' & locAppendYear == '' & queryTag == null) {
                window.location.href = locSnip + '?Media=' + locAppendMedia;
            }
            else if (locAppendMedia != '' & locAppendYear != '' & queryTag == null) {
                window.location.href = locSnip + '?Media=' + locAppendMedia + '&Year=' + locAppendYear;
            }
            else if (locAppendMedia == '' & locAppendYear != '' & queryTag != null) {
                window.location.href = locSnip + '?Year=' + locAppendYear + '&Tag=' + queryTag;
            }
            else if (locAppendMedia != '' & locAppendYear == '' & queryTag != null) {
                window.location.href = locSnip + '?Media=' + locAppendMedia + '&Tag=' + queryTag;
            }

        }
        else {
            //var locAppend = $(this).find('option:selected').val();
            window.location.href = current + '?Media=' + locAppendMedia;
        }

    });
    var test1 = getParameterByName('Media');
    var test2 = getParameterByName('Year');

    if (test1 != null) {
        $("#articleMediaFilter option[value='" + test1 + "']").get(0).selected = true;
    }
    if (test2 != null) {
        $("#articleYearFilter option[value='" + test2 + "']").get(0).selected = true;
    }
});

function getParameterByName(name, url) {
     if (!url) url = window.location.href;
     name = name.replace(/[\[\]]/g, "\\$&");
     var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
         results = regex.exec(url);
     if (!results) return null;
     if (!results[2]) return '';
     return decodeURIComponent(results[2].replace(/\+/g, " "));
}


function GetLoadMoreArticles() {
	var activeFlag = null;
	try
	{
		var classGrid = $('#grid').attr('class');
		var classList = $('#list').attr('class');
		if(classGrid.indexOf("active") != -1)
		{
			activeFlag = "grid";
		}
		else if(classList.indexOf("active") != -1)
		{
			activeFlag = "list";
		}
	}
	catch(err)
	{
		activeFlag="na";
	}
	//alert(activeFlag);
	//$('#grid').attr('class');
    var jsonData = {}
    var jsonObject = JSON.stringify(jsonData);
    var temp = document.getElementById('items-group').firstElementChild;
    child = temp.children;
    var itemsCount = child.length;
    var resData = null;
    $.ajax({
        type: "GET",
        contentType: "application/json; charset=utf-8",
        url: "/_vti_bin/InfosysCMS/InfosysCMSService.svc/GetArticleLoadMoreItems?existingItems=" + itemsCount +"&activeFlag="+activeFlag,
        //data: jsonObject,
        //dataType: "json",
        processData: true,		
        success: function (responseData) {
            resData = responseData;
            insertArticleHTML(resData);
            //alert(responseData);
        },
        error: function (xhr, ajaxOptions, thrownError) {

        }
    });
    return false;

}

function insertArticleHTML(resData) {
var loadMoreHTML = $.parseHTML(resData[0]);
var divEle = $('#items-group').children().first();
divEle.append(loadMoreHTML );
	if (resData[1].toLowerCase() != 'true') 
	{
	   	$('.insight-btn').addClass('toggle-more');//css('display', 'none');	   	

	}

    //var divEle = $('#items-group').children().first();//document.getElementById("items-group").firstElementChild;
    //divEle.append(resData);
    
    setTagPositionHeight();    //divEle.insertAdjacentHTML( 'beforeend', resData);
}

function setTagPositionHeight() {
			$('.equal-bg, .item-list').each(function() {
				$(this).find('.tag-postion').css('top', $(this).find('.get-image-height').height());
			});
}$(document).ready(function () {
    if ($('.search__color').length > 0)
    {
        //var jsonResData = {}
       // var jsonResCPObject = JSON.stringify(jsonResData);
        $.ajax({
            type: "GET",
            contentType: "application/json; charset=utf-8",
            url: "/_vti_bin/InfosysCMS/InfosysCMSService.svc/GetSearchControlHTML",
            //data: jsonCPObject,
            processData: true,
            success: function (responseData) {
                if (responseData.length > 0) {

                    insertHTML(responseData);
                    //$('.search__color').append(responseData);
                }
            },
            error: function (xhr, ajaxOptions, thrownError) {
                LoggingInConsole(xhr.status);
                LoggingInConsole(thrownError);
            }
        });
    }  
});

function insertHTML(respData)
{
    $('.search__color').append(respData);
    init();
}

function init() {
    initEvents();
}

function initEvents() {
    var openCtrl = document.getElementById('btn-search'),
		closeCtrl = document.getElementById('btn-search-close');
		
    openCtrl.addEventListener('click', openSearch);
    closeCtrl.addEventListener('click', closeSearch);
    document.addEventListener('keyup', function (ev) {
        // escape key.
        if (ev.keyCode == 27) {
            closeSearch();
        }
        //enter key
        
    });
}

function openSearch() {
    var mainContainer = document.querySelector('.main-wrap'),
    searchContainer = document.querySelector('.search'),
    inputSearch = searchContainer.querySelector('.search__input');
    mainContainer.classList.add('main-wrap--hide');
    $('body').css('overflow-y', 'hidden');
    $('.container mt45').css('display', 'none');
    $('.progressbar, .hero-list').css('display', 'none');
    $('.search__color').find('.search').css('width', '100%');
    searchContainer.classList.add('search--open');
    setTimeout(function () {
        inputSearch.focus();
    }, 500);
    
}

function closeSearch() {
    var mainContainer = document.querySelector('.main-wrap'),
    searchContainer = document.querySelector('.search'),
    inputSearch = searchContainer.querySelector('.search__input');
    mainContainer.classList.remove('main-wrap--hide');
    $('body').css('overflow-y', 'scroll');
    $('.progressbar, .hero-list').css('display', 'block');
    $('.search__color').find('.search').css('width', 'auto');
    searchContainer.classList.remove('search--open');
    inputSearch.blur();
    inputSearch.value = '';
}
$(document).on('keypress', '.search__input', function (e) {

    if (e.which == '13') {
        var txtValueIF = $('.search__input').val();
        //var resulturl = 'search/pages/index.aspx';
        var resulturl = $("#infy_search").attr("resultUrl");
        var base_url = window.location.protocol + "//" + window.location.hostname + (window.location.port ? ':' + window.location.port : '');
        var finalUrl = base_url + '/' + resulturl;
        finalUrl = finalUrl + "?k=" + txtValueIF;
	//finalUrl = finalUrl + "#k="+txtValueIF+"#ft=#cb=#q="+txtValueIF
        window.location.href = finalUrl;
        e.preventDefault();
    }
});

//Adobe DTM Datalayer
function AdobeSearchKey(searchKey, resultsCount) {
    var DTM_search_keyword = searchKey;
    var DTM_pageurl = window.location.pathname;
    DTM_pageurl = DTM_pageurl.toLowerCase();
    var DTM_pageURLs = DTM_pageurl.split("pages/");
    var DTM_Sections = DTM_pageURLs[0].split("/");
    var DTM_channel = "";
    var DTM_subSection2 = "";
    var DTM_subSection3 = "";
    if (DTM_Sections.length > 2) {
        DTM_channel = DTM_Sections[1];
        DTM_subSection2 = DTM_Sections[2];
        if (DTM_Sections.length > 3) {
            var DTM_subSection3 = DTM_Sections[3];

            for (i = 4; i < DTM_Sections.length - 1; i++) {
                DTM_subSection3 = DTM_subSection3 + " " + DTM_Sections[i];
            }
        }
    } else {
        DTM_channel = "Home Page";
    }
    if (resultsCount != 0) {
        digitalData = {
            search: {
                'internalSearchKeywords': DTM_search_keyword,
                'numberOfResults': resultsCount
            },
            page: {
                'pageName': document.title,
                'channel': DTM_channel,
                'subSection2': DTM_subSection2,
                'subSection3': DTM_subSection3
            }
        };
    }
    else {
        digitalData = {
            search: {
                'internalSearchKeywords': DTM_search_keyword,
                'numberOfResults': resultsCount,
                'noResultFound': 'Yes'
            },
            page: {
                'pageName': document.title,
                'channel': DTM_channel,
                'subSection2': DTM_subSection2,
                'subSection3': DTM_subSection3
            }
        };
    }
}
//Adobe DTM Datalayer END

//filter by topics - highlight selected topic//

$(document).ready(function(e)
{
    var url = window.location.search.toLowerCase();
    
    if(url.match('tag'))
    {
        if(url.match('year') || url.match('media'))
        {
            var splittedString=url.split("&");	
            splittedString=splittedString[splittedString.length-1].split("=");
            var afterDecode=decodeURIComponent(splittedString[1]).toLowerCase();
        }
        else
        {

            var splittedString=url.split("=");	
            var afterDecode=decodeURIComponent(splittedString[1]).toLowerCase();
        }
        $('.hilite-chk').children('a').each(function () {
            var selectedValue=$(this).text().toLowerCase();
            if(selectedValue.trim()==afterDecode.trim())
            {				
                $(this).addClass('tag-active');
            }
        });
    }
});


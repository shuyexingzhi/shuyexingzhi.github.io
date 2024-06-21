var isInitialTextVisible = true;
var isntDialogTextVisible = true;
var isntCollegeInformationVisible = true;
var isntChinaMapLighting = true;
var currentIndex = 0;
var ids = ['dongbei_college', 'huabei_college', 'huazhong_college','huanan_college','huadong_college','xinan_college','xibei_college','initial-text'];
var colleges = ['college_hagongda','college_dalianligong','college_zhongchuan','college_beida','college_fudan','college_zheda','college_xiada','college_zhongshan','college_gangda','college_huake','college_wuda','college_xijiao','college_chongda','college_chuanda']

function addhiddenClassesByIds(ids) {
      if (!Array.isArray(ids)) {
          console.error('ids 参数必须是一个数组');
          return;
      }
      ids.forEach(function(id) {
          $('#' + id).addClass('hidden');
      });
  }
/*选择大学*/
$(document).ready(function() {
    $('#dongbei').click(function(e) {
        if (isInitialTextVisible) {
          addhiddenClassesByIds(ids);
          $('#dongbei_college').removeClass('hidden');
          isInitialTextVisible = false;
          isntDialogTextVisible = false;
        }else if (!isntDialogTextVisible) {
          addhiddenClassesByIds(ids);
          $('#dongbei_college').removeClass('hidden');
        }
        else {
          addhiddenClassesByIds(ids);
          $('#initial-text').removeClass('hidden');
          isInitialTextVisible = true;
        }
    });
});
$(document).ready(function() {
    $('#huabei').click(function(e) {
        if (isInitialTextVisible) {
          addhiddenClassesByIds(ids);
          $('#huabei_college').removeClass('hidden');
          isInitialTextVisible = false;
          isntDialogTextVisible = false;
        }else if (!isntDialogTextVisible) {
          addhiddenClassesByIds(ids);
          $('#huabei_college').removeClass('hidden');
        }
        else {
          addhiddenClassesByIds(ids);
          $('#initial-text').removeClass('hidden');
          isInitialTextVisible = true;
        }
    });
});
$(document).ready(function() {
    $('#huadong').click(function(e) {
        if (isInitialTextVisible) {
          addhiddenClassesByIds(ids);
          $('#huadong_college').removeClass('hidden');
          isInitialTextVisible = false;
          isntDialogTextVisible = false;
        }else if (!isntDialogTextVisible) {
          addhiddenClassesByIds(ids);
          $('#huadong_college').removeClass('hidden');
        }
        else {
          addhiddenClassesByIds(ids);
          $('#initial-text').removeClass('hidden');
          isInitialTextVisible = true;
        }
    });
});
$(document).ready(function() {
    $('#huanan').click(function(e) {
        if (isInitialTextVisible) {
          addhiddenClassesByIds(ids);
          $('#huanan_college').removeClass('hidden');
          isInitialTextVisible = false;
          isntDialogTextVisible = false;
        }else if (!isntDialogTextVisible) {
          addhiddenClassesByIds(ids);
          $('#huanan_college').removeClass('hidden');
        }
        else {
          addhiddenClassesByIds(ids);
          $('#initial-text').removeClass('hidden');
          isInitialTextVisible = true;
        }
    });
});
$(document).ready(function() {
    $('#huazhong').click(function(e) {
        if (isInitialTextVisible) {
          addhiddenClassesByIds(ids);
          $('#huazhong_college').removeClass('hidden');
          isInitialTextVisible = false;
          isntDialogTextVisible = false;
        }else if (!isntDialogTextVisible) {
          addhiddenClassesByIds(ids);
          $('#huazhong_college').removeClass('hidden');
        }
        else {
          addhiddenClassesByIds(ids);
          $('#initial-text').removeClass('hidden');
          isInitialTextVisible = true;
        }
    });
});
$(document).ready(function() {
    $('#xibei').click(function(e) {
        if (isInitialTextVisible) {
          addhiddenClassesByIds(ids);
          $('#xibei_college').removeClass('hidden');
          isInitialTextVisible = false;
          isntDialogTextVisible = false;
        }else if (!isntDialogTextVisible) {
          addhiddenClassesByIds(ids);
          $('#xibei_college').removeClass('hidden');
        }
        else {
          addhiddenClassesByIds(ids);
          $('#initial-text').removeClass('hidden');
          isInitialTextVisible = true;
        }
    });
});
$(document).ready(function() {
    $('#xinan').click(function(e) {
        if (isInitialTextVisible) {
          addhiddenClassesByIds(ids);
          $('#xinan_college').removeClass('hidden');
          isInitialTextVisible = false;
          isntDialogTextVisible = false;
        }else if (!isntDialogTextVisible) {
          addhiddenClassesByIds(ids);
          $('#xinan_college').removeClass('hidden');
        }
        else {
          addhiddenClassesByIds(ids);
          $('#initial-text').removeClass('hidden');
          isInitialTextVisible = true;
        }
    });
});

/*信息换页*/
function showText(index) {
    $('.text-item').removeClass('active');
    $('.text-item').eq(index).addClass('active');
}
$(document).ready(function() {
    $('.left-arrow').on('click', function() {
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : $('.text-item').length - 1;
        showText(currentIndex);
    });

    $('.right-arrow').on('click', function() {
        currentIndex = (currentIndex < $('.text-item').length - 1) ? currentIndex + 1 : 0;
        showText(currentIndex);
    });

    showText(0);
});

/*校树信息*/
function removeShowClassesByIds(colleges) {
      if (!Array.isArray(colleges)) {
          console.error('colleges 参数必须是一个数组');
          return;
      }
      colleges.forEach(function(id) {
          $('#' + id).removeClass('show');
      });
  }

$(document).ready(function() {
    $('#hagongda').click(function(e) {
        currentIndex = 0;
        showText(currentIndex);
        removeShowClassesByIds(colleges);
        $('#college_hagongda').addClass('show');
    });
});
$(document).ready(function() {
    $('#dalianligong').click(function(e) {
        currentIndex = 3;
        showText(currentIndex);
        removeShowClassesByIds(colleges);
        $('#college_dalianligong').addClass('show');
    });
});
$(document).ready(function() {
    $('#zhongchuan').click(function(e) {
        currentIndex = 7;
        showText(currentIndex);
        removeShowClassesByIds(colleges);
        $('#college_zhongchuan').addClass('show');
    });
});
$(document).ready(function() {
    $('#beida').click(function(e) {
        currentIndex = 10;
        showText(currentIndex);
        removeShowClassesByIds(colleges);
        $('#college_beida').addClass('show');
    });
});
$(document).ready(function() {
    $('#fudan').click(function(e) {
        currentIndex = 13;
        showText(currentIndex);
        removeShowClassesByIds(colleges);
        $('#college_fudan').addClass('show');
    });
});
$(document).ready(function() {
    $('#zheda').click(function(e) {
        currentIndex = 17;
        showText(currentIndex);
        removeShowClassesByIds(colleges);
        $('#college_zheda').addClass('show');
    });
});
$(document).ready(function() {
    $('#xiada').click(function(e) {
        currentIndex = 21;
        showText(currentIndex);
        removeShowClassesByIds(colleges);
        $('#college_xiada').addClass('show');
    });
});
$(document).ready(function() {
    $('#zhongshan').click(function(e) {
        currentIndex = 24;
        showText(currentIndex);
        removeShowClassesByIds(colleges);
        $('#college_zhongshan').addClass('show');
    });
});
$(document).ready(function() {
    $('#gangda').click(function(e) {
        currentIndex = 28;
        showText(currentIndex);
        removeShowClassesByIds(colleges);
        $('#college_gangda').addClass('show');
    });
});
$(document).ready(function() {
    $('#huake').click(function(e) {
        currentIndex = 32;
        showText(currentIndex);
        removeShowClassesByIds(colleges);
        $('#college_huake').addClass('show');
    });
});
$(document).ready(function() {
    $('#wuda').click(function(e) {
        currentIndex = 37;
        showText(currentIndex);
        removeShowClassesByIds(colleges);
        $('#college_wuda').addClass('show');
    });
});
$(document).ready(function() {
    $('#xijiao').click(function(e) {
        currentIndex = 41;
        showText(currentIndex);
        removeShowClassesByIds(colleges);
        $('#college_xijiao').addClass('show');
    });
});
$(document).ready(function() {
    $('#chongda').click(function(e) {
        currentIndex = 45;
        showText(currentIndex);
        removeShowClassesByIds(colleges);
        $('#college_chongda').addClass('show');
    });
});
$(document).ready(function() {
    $('#chuanda').click(function(e) {
        currentIndex = 49;
        showText(currentIndex);
        removeShowClassesByIds(colleges);
        $('#college_chuanda').addClass('show');
    });
});

/*地图高亮*/
var province = ['北京市','天津市','河北省','山西省','内蒙古自治区','辽宁省','吉林省','黑龙江省','上海市','江苏省','浙江省','安徽省','福建省','江西省','山东省','河南省','湖北省','湖南省','广东省','广西壮族自治区','海南省','重庆市','四川省','贵州省','云南省','西藏自治区','陕西省','甘肃省','青海省','宁夏回族自治区','新疆维吾尔自治区','香港特别行政区','澳门特别行政区','台湾省']
var mijichengdu = ['highmiji','midmiji','lowmiji'];

function removeMijiClassesByIds(provinceIds) {
    provinceIds.forEach(function(id) {
        var element = document.getElementById(id);
        if (element) {
            mijichengdu.forEach(function(className) {
                element.classList.remove(className);
            });
        }
    });
}
function removeLightingClasses() {
    var elementsWithLighting = document.querySelectorAll('.lighting');
    elementsWithLighting.forEach(function(element) {
        element.classList.remove('lighting');
    });
}
var pathElement = document.getElementById('dongbei');
pathElement.addEventListener('click', function() {
  removeMijiClassesByIds(province);
  if (!isntChinaMapLighting) {
      removeLightingClasses();
      this.classList.toggle('lighting');
    }
  else {
    this.classList.toggle('lighting');
    isntChinaMapLighting=false;
  }
});
var pathElement = document.getElementById('huabei');
pathElement.addEventListener('click', function() {
  removeMijiClassesByIds(province);
  if (!isntChinaMapLighting) {
      removeLightingClasses();
      this.classList.toggle('lighting');
    }
  else {
    this.classList.toggle('lighting');
    isntChinaMapLighting=false;
  }
});
var pathElement = document.getElementById('huadong');
pathElement.addEventListener('click', function() {
  removeMijiClassesByIds(province);
  if (!isntChinaMapLighting) {
      removeLightingClasses();
      this.classList.toggle('lighting');
    }
  else {
    this.classList.toggle('lighting');
    isntChinaMapLighting=false;
  }
});
var pathElement = document.getElementById('huanan');
pathElement.addEventListener('click', function() {
  removeMijiClassesByIds(province);
  if (!isntChinaMapLighting) {
      removeLightingClasses();
      this.classList.toggle('lighting');
    }
  else {
    this.classList.toggle('lighting');
    isntChinaMapLighting=false;
  }
});
var pathElement = document.getElementById('huazhong');
pathElement.addEventListener('click', function() {
  removeMijiClassesByIds(province);
  if (!isntChinaMapLighting) {
      removeLightingClasses();
      this.classList.toggle('lighting');
    }
  else {
    this.classList.toggle('lighting');
    isntChinaMapLighting=false;
  }
});
var pathElement = document.getElementById('xibei');
pathElement.addEventListener('click', function() {
  removeMijiClassesByIds(province);
  if (!isntChinaMapLighting) {
      removeLightingClasses();
      this.classList.toggle('lighting');
    }
  else {
    this.classList.toggle('lighting');
    isntChinaMapLighting=false;
  }
});
var pathElement = document.getElementById('xinan');
pathElement.addEventListener('click', function() {
  removeMijiClassesByIds(province);
  if (!isntChinaMapLighting) {
      removeLightingClasses();
      this.classList.toggle('lighting');
    }
  else {
    this.classList.toggle('lighting');
    isntChinaMapLighting=false;
  }
});


/*树种区域可视化*/
var classNamesToHide = ['wutong','shuishan','hehua','zijinghua','dinxiang','yinxing','fenghuangmu','yinghua','yulan','baiyang','mumian','yujinxiang'];
function hideElementsByClass(classNamesToHide) {
    classNamesToHide.forEach(function(className) {
        var elements = document.getElementsByClassName(className);
        for (var i = 0; i < elements.length; i++) {
            elements[i].style.opacity = '0';
        }
    });
    setTimeout(function(){
      classNamesToHide.forEach(function(className) {
        var elements = document.getElementsByClassName(className);
        for (var i = 0; i < elements.length; i++) {
            elements[i].classList.remove(className);
        }
      });
    },300);
}
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('hagongda').addEventListener('click', function(e) {
      var shutuElements = document.querySelectorAll('#shutu .shutu');
      hideElementsByClass(classNamesToHide);

      setTimeout(function(){
        shutuElements.forEach(function(shutuElement) {
          shutuElement.classList.add('dinxiang');
        });
      },500);
      setTimeout(function(){
        shutuElements.forEach(function(shutuElement) {
          shutuElement.style.transition = 'opacity 0.5s ease-in-out';
          shutuElement.style.opacity = '0.36';
        });
      },1000);
        removeMijiClassesByIds(province);
        removeLightingClasses();
        var highmijishow = ['北京市','天津市','河北省','山西省','辽宁省','黑龙江省','宁夏回族自治区','上海市','陕西省','甘肃省','青海省','山东省',];
        var midmijishow = ['江苏省','浙江省','河南省','内蒙古自治区'];
        var lowmijishow = ['四川省','西藏自治区','新疆维吾尔自治区','湖北省','湖南省','福建省','安徽省','江西省'];
        highmijishow.forEach(function(provinceName) {
            var element = document.getElementById(provinceName);
            if (element) {
                element.classList.add('highmiji');
            }
        });
        midmijishow.forEach(function(provinceName) {
            var element = document.getElementById(provinceName);
            if (element) {
                element.classList.add('midmiji');
            }
        });
        lowmijishow.forEach(function(provinceName) {
            var element = document.getElementById(provinceName);
            if (element) {
                element.classList.add('lowmiji');
            }
        });
    });
});
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('dalianligong').addEventListener('click', function(e) {
      var shutuElements = document.querySelectorAll('#shutu .shutu');
      hideElementsByClass(classNamesToHide);
      setTimeout(function(){
        shutuElements.forEach(function(shutuElement) {
          shutuElement.classList.add('shuishan');
        });
      },500);
      setTimeout(function(){
        shutuElements.forEach(function(shutuElement) {
          shutuElement.style.transition = 'opacity 0.5s ease-in-out';
          shutuElement.style.opacity = '0.36';
        });
      },1000);
        removeMijiClassesByIds(province);
        removeLightingClasses();
        var highmijishow = ['北京市','天津市','上海市','重庆市','四川省'];
        var midmijishow = ['安徽省','福建省','江西省','山东省','浙江省','贵州省','云南省','湖北省','广西壮族自治区','陕西省'];
        var lowmijishow = ['河北省','山西省','江苏省','河南省','湖南省','广东省','西藏自治区','甘肃省','新疆维吾尔自治区'];
        highmijishow.forEach(function(provinceName) {
            var element = document.getElementById(provinceName);
            if (element) {
                element.classList.add('highmiji');
            }
        });
        midmijishow.forEach(function(provinceName) {
            var element = document.getElementById(provinceName);
            if (element) {
                element.classList.add('midmiji');
            }
        });
        lowmijishow.forEach(function(provinceName) {
            var element = document.getElementById(provinceName);
            if (element) {
                element.classList.add('lowmiji');
            }
        });
    });
});
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('zhongchuan').addEventListener('click', function(e) {
      var shutuElements = document.querySelectorAll('#shutu .shutu');
      hideElementsByClass(classNamesToHide);
      setTimeout(function(){
        shutuElements.forEach(function(shutuElement) {
          shutuElement.classList.add('baiyang');
        });
      },500);
      setTimeout(function(){
        shutuElements.forEach(function(shutuElement) {
          shutuElement.style.transition = 'opacity 0.5s ease-in-out';
          shutuElement.style.opacity = '0.36';
        });
      },1000);
        removeMijiClassesByIds(province);
        removeLightingClasses();
        var highmijishow = ['北京市','天津市','内蒙古自治区','宁夏回族自治区','甘肃省','陕西省',' 新疆维吾尔自治区','西藏自治区'];
        var midmijishow = ['河北省','山西省','河南省','江苏省','山东省','辽宁省'];
        var lowmijishow = ['四川省','贵州省','重庆市','江西省','浙江省','吉林省'];
        highmijishow.forEach(function(provinceName) {
            var element = document.getElementById(provinceName);
            if (element) {
                element.classList.add('highmiji');
            }
        });
        midmijishow.forEach(function(provinceName) {
            var element = document.getElementById(provinceName);
            if (element) {
                element.classList.add('midmiji');
            }
        });
        lowmijishow.forEach(function(provinceName) {
            var element = document.getElementById(provinceName);
            if (element) {
                element.classList.add('lowmiji');
            }
        });
    });
});
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('beida').addEventListener('click', function(e) {
      var shutuElements = document.querySelectorAll('#shutu .shutu');
      hideElementsByClass(classNamesToHide);
      setTimeout(function(){
        shutuElements.forEach(function(shutuElement) {
          shutuElement.classList.add('yinxing');
        });
      },500);
      setTimeout(function(){
        shutuElements.forEach(function(shutuElement) {
          shutuElement.style.transition = 'opacity 0.5s ease-in-out';
          shutuElement.style.opacity = '0.36';
        });
      },1000);
        removeMijiClassesByIds(province);
        removeLightingClasses();
        var highmijishow = ['北京市','山西省','陕西省','贵州省','广西壮族自治区','福建省','上海市','江苏省','山东省'];
        var midmijishow = ['湖南省','辽宁省','广东省','安徽省'];
        var lowmijishow = ['天津市','内蒙古自治区','云南省','青海省'];
        highmijishow.forEach(function(provinceName) {
            var element = document.getElementById(provinceName);
            if (element) {
                element.classList.add('highmiji');
            }
        });
        midmijishow.forEach(function(provinceName) {
            var element = document.getElementById(provinceName);
            if (element) {
                element.classList.add('midmiji');
            }
        });
        lowmijishow.forEach(function(provinceName) {
            var element = document.getElementById(provinceName);
            if (element) {
                element.classList.add('lowmiji');
            }
        });
    });
});
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('fudan').addEventListener('click', function(e) {
      var shutuElements = document.querySelectorAll('#shutu .shutu');
      hideElementsByClass(classNamesToHide);
      setTimeout(function(){
        shutuElements.forEach(function(shutuElement) {
          shutuElement.classList.add('hehua');
        });
      },500);
      setTimeout(function(){
        shutuElements.forEach(function(shutuElement) {
          shutuElement.style.transition = 'opacity 0.5s ease-in-out';
          shutuElement.style.opacity = '0.36';
        });
      },1000);
        removeMijiClassesByIds(province);
        removeLightingClasses();
        var highmijishow = ['上海市','湖南省','浙江省','安徽省','福建省','江西省','山东省','四川省','贵州省','陕西省'];
        var midmijishow = ['北京市','天津市','山西省','湖北省','广西壮族自治区','河南省','云南省'];
        var lowmijishow = ['河北省','辽宁省','江苏省','广东省','重庆市','西藏自治区','甘肃省','台湾省'];
        highmijishow.forEach(function(provinceName) {
            var element = document.getElementById(provinceName);
            if (element) {
                element.classList.add('highmiji');
            }
        });
        midmijishow.forEach(function(provinceName) {
            var element = document.getElementById(provinceName);
            if (element) {
                element.classList.add('midmiji');
            }
        });
        lowmijishow.forEach(function(provinceName) {
            var element = document.getElementById(provinceName);
            if (element) {
                element.classList.add('lowmiji');
            }
        });
    });
});
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('zheda').addEventListener('click', function(e) {
      var shutuElements = document.querySelectorAll('#shutu .shutu');
      hideElementsByClass(classNamesToHide);
      setTimeout(function(){
        shutuElements.forEach(function(shutuElement) {
          shutuElement.classList.add('yulan');
        });
      },500);
      setTimeout(function(){
        shutuElements.forEach(function(shutuElement) {
          shutuElement.style.transition = 'opacity 0.5s ease-in-out';
          shutuElement.style.opacity = '0.36';
        });
      },1000);
        removeMijiClassesByIds(province);
        removeLightingClasses();
        var highmijishow = ['江苏省','浙江省','广西壮族自治区'];
        var midmijishow = ['福建省','广东省','四川省'];
        var lowmijishow = ['北京市','上海市','安徽省','江西省','山东省','河南省','湖北省','湖南省','海南省','重庆市','贵州省','云南省','陕西省','甘肃省','台湾省','香港特别行政区'];
        highmijishow.forEach(function(provinceName) {
            var element = document.getElementById(provinceName);
            if (element) {
                element.classList.add('highmiji');
            }
        });
        midmijishow.forEach(function(provinceName) {
            var element = document.getElementById(provinceName);
            if (element) {
                element.classList.add('midmiji');
            }
        });
        lowmijishow.forEach(function(provinceName) {
            var element = document.getElementById(provinceName);
            if (element) {
                element.classList.add('lowmiji');
            }
        });
    });
});
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('xiada').addEventListener('click', function(e) {
      var shutuElements = document.querySelectorAll('#shutu .shutu');
      hideElementsByClass(classNamesToHide);
      setTimeout(function(){
        shutuElements.forEach(function(shutuElement) {
          shutuElement.classList.add('fenghuangmu');
        });
      },500);
      setTimeout(function(){
        shutuElements.forEach(function(shutuElement) {
          shutuElement.style.transition = 'opacity 0.5s ease-in-out';
          shutuElement.style.opacity = '0.36';
        });
      },1000);
        removeMijiClassesByIds(province);
        removeLightingClasses();
        var highmijishow = ['福建省','广东省','广西壮族自治区','海南省','云南省'];
        var midmijishow = ['贵州省','湖南省'];
        var lowmijishow = ['河南省','四川省'];
        highmijishow.forEach(function(provinceName) {
            var element = document.getElementById(provinceName);
            if (element) {
                element.classList.add('highmiji');
            }
        });
        midmijishow.forEach(function(provinceName) {
            var element = document.getElementById(provinceName);
            if (element) {
                element.classList.add('midmiji');
            }
        });
        lowmijishow.forEach(function(provinceName) {
            var element = document.getElementById(provinceName);
            if (element) {
                element.classList.add('lowmiji');
            }
        });
    });
});
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('zhongshan').addEventListener('click', function(e) {
      var shutuElements = document.querySelectorAll('#shutu .shutu');
      hideElementsByClass(classNamesToHide);
      setTimeout(function(){
        shutuElements.forEach(function(shutuElement) {
          shutuElement.classList.add('mumian');
        });
      },500);
      setTimeout(function(){
        shutuElements.forEach(function(shutuElement) {
          shutuElement.style.transition = 'opacity 0.5s ease-in-out';
          shutuElement.style.opacity = '0.36';
        });
      },1000);
        removeMijiClassesByIds(province);
        removeLightingClasses();
        var highmijishow = ['广西壮族自治区','福建省','海南省','贵州省','云南省'];
        var midmijishow = ['广东省','四川省','香港特别行政区'];
        var lowmijishow = ['浙江省','江西省','重庆市','台湾省'];
        highmijishow.forEach(function(provinceName) {
            var element = document.getElementById(provinceName);
            if (element) {
                element.classList.add('highmiji');
            }
        });
        midmijishow.forEach(function(provinceName) {
            var element = document.getElementById(provinceName);
            if (element) {
                element.classList.add('midmiji');
            }
        });
        lowmijishow.forEach(function(provinceName) {
            var element = document.getElementById(provinceName);
            if (element) {
                element.classList.add('lowmiji');
            }
        });
    });
});
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('gangda').addEventListener('click', function(e) {
      var shutuElements = document.querySelectorAll('#shutu .shutu');
      hideElementsByClass(classNamesToHide);
      setTimeout(function(){
        shutuElements.forEach(function(shutuElement) {
          shutuElement.classList.add('zijinghua');
        });
      },500);
      setTimeout(function(){
        shutuElements.forEach(function(shutuElement) {
          shutuElement.style.transition = 'opacity 0.5s ease-in-out';
          shutuElement.style.opacity = '0.36';
        });
      },1000);
        removeMijiClassesByIds(province);
        removeLightingClasses();
        var highmijishow = ['福建省','江西省','广东省','广西壮族自治区','海南省','重庆市','四川省','贵州省','云南省'];
        var midmijishow = ['湖北省','湖南省'];
        var lowmijishow = ['江苏省','西藏自治区','甘肃省'];
        highmijishow.forEach(function(provinceName) {
            var element = document.getElementById(provinceName);
            if (element) {
                element.classList.add('highmiji');
            }
        });
        midmijishow.forEach(function(provinceName) {
            var element = document.getElementById(provinceName);
            if (element) {
                element.classList.add('midmiji');
            }
        });
        lowmijishow.forEach(function(provinceName) {
            var element = document.getElementById(provinceName);
            if (element) {
                element.classList.add('lowmiji');
            }
        });
    });
});
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('huake').addEventListener('click', function(e) {
      var shutuElements = document.querySelectorAll('#shutu .shutu');
      hideElementsByClass(classNamesToHide);
      setTimeout(function(){
        shutuElements.forEach(function(shutuElement) {
          shutuElement.classList.add('wutong');
        });
      },500);
      setTimeout(function(){
        shutuElements.forEach(function(shutuElement) {
          shutuElement.style.transition = 'opacity 0.5s ease-in-out';
          shutuElement.style.opacity = '0.36';
        });
      },1000);
        removeMijiClassesByIds(province);
        removeLightingClasses();
        var highmijishow = ['上海市','湖北省','湖南省','广东省','广西壮族自治区'];
        var midmijishow = ['北京市','浙江省','福建省','江西省','山东省','海南省','四川省','陕西省','香港特别行政区'];
        var lowmijishow = ['天津市','河北省','山西省','江苏省','安徽省','河南省','重庆市','贵州省','云南省','甘肃省','台湾省'];
        highmijishow.forEach(function(provinceName) {
            var element = document.getElementById(provinceName);
            if (element) {
                element.classList.add('highmiji');
            }
        });
        midmijishow.forEach(function(provinceName) {
            var element = document.getElementById(provinceName);
            if (element) {
                element.classList.add('midmiji');
            }
        });
        lowmijishow.forEach(function(provinceName) {
            var element = document.getElementById(provinceName);
            if (element) {
                element.classList.add('lowmiji');
            }
        });
    });
});
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('wuda').addEventListener('click', function(e) {
      var shutuElements = document.querySelectorAll('#shutu .shutu');
      hideElementsByClass(classNamesToHide);
      setTimeout(function(){
        shutuElements.forEach(function(shutuElement) {
          shutuElement.classList.add('yinghua');
        });
      },500);
      setTimeout(function(){
        shutuElements.forEach(function(shutuElement) {
          shutuElement.style.transition = 'opacity 0.5s ease-in-out';
          shutuElement.style.opacity = '0.36';
        });
      },1000);
        removeMijiClassesByIds(province);
        removeLightingClasses();
        var highmijishow = ['北京市','天津市','河北省','山西省','浙江省','江西省','湖南省'];
        var midmijishow = ['内蒙古自治区','辽宁省','黑龙江省','安徽省','山东省','湖北省','四川省','贵州省','云南省','陕西省'];
        var lowmijishow = ['上海市','江苏省','福建省','河南省','广西壮族自治区','重庆市','甘肃省'];
        highmijishow.forEach(function(provinceName) {
            var element = document.getElementById(provinceName);
            if (element) {
                element.classList.add('highmiji');
            }
        });
        midmijishow.forEach(function(provinceName) {
            var element = document.getElementById(provinceName);
            if (element) {
                element.classList.add('midmiji');
            }
        });
        lowmijishow.forEach(function(provinceName) {
            var element = document.getElementById(provinceName);
            if (element) {
                element.classList.add('lowmiji');
            }
        });
    });
});
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('xijiao').addEventListener('click', function(e) {
      var shutuElements = document.querySelectorAll('#shutu .shutu');
      hideElementsByClass(classNamesToHide);
      setTimeout(function(){
        shutuElements.forEach(function(shutuElement) {
          shutuElement.classList.add('wutong');
        });
      },500);
      setTimeout(function(){
        shutuElements.forEach(function(shutuElement) {
          shutuElement.style.transition = 'opacity 0.5s ease-in-out';
          shutuElement.style.opacity = '0.36';
        });
      },1000);
        removeMijiClassesByIds(province);
        removeLightingClasses();
        var highmijishow = ['上海市','湖北省','湖南省','广东省','广西壮族自治区'];
        var midmijishow = ['北京市','浙江省','福建省','江西省','山东省','海南省','四川省','陕西省','香港特别行政区'];
        var lowmijishow = ['天津市','河北省','山西省','江苏省','安徽省','河南省','重庆市','贵州省','云南省','甘肃省','台湾省'];
        highmijishow.forEach(function(provinceName) {
            var element = document.getElementById(provinceName);
            if (element) {
                element.classList.add('highmiji');
            }
        });
        midmijishow.forEach(function(provinceName) {
            var element = document.getElementById(provinceName);
            if (element) {
                element.classList.add('midmiji');
            }
        });
        lowmijishow.forEach(function(provinceName) {
            var element = document.getElementById(provinceName);
            if (element) {
                element.classList.add('lowmiji');
            }
        });
    });
});
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('chongda').addEventListener('click', function(e) {
      var shutuElements = document.querySelectorAll('#shutu .shutu');
      hideElementsByClass(classNamesToHide);
      setTimeout(function(){
        shutuElements.forEach(function(shutuElement) {
          shutuElement.classList.add('yujinxiang');
        });
      },500);
      setTimeout(function(){
        shutuElements.forEach(function(shutuElement) {
          shutuElement.style.transition = 'opacity 0.5s ease-in-out';
          shutuElement.style.opacity = '0.36';
        });
      },1000);
        removeMijiClassesByIds(province);
        removeLightingClasses();
        var highmijishow = ['新疆维吾尔自治区','上海市','浙江省','山东省'];
        var midmijishow = ['江西省','湖北省','河南省'];
        var lowmijishow = ['湖南省','贵州省','陕西省','宁夏回族自治区','四川省','重庆市','内蒙古 自治区','黑龙江省','吉林省','辽宁省'];
        highmijishow.forEach(function(provinceName) {
            var element = document.getElementById(provinceName);
            if (element) {
                element.classList.add('highmiji');
            }
        });
        midmijishow.forEach(function(provinceName) {
            var element = document.getElementById(provinceName);
            if (element) {
                element.classList.add('midmiji');
            }
        });
        lowmijishow.forEach(function(provinceName) {
            var element = document.getElementById(provinceName);
            if (element) {
                element.classList.add('lowmiji');
            }
        });
    });
});
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('chuanda').addEventListener('click', function(e) {
      var shutuElements = document.querySelectorAll('#shutu .shutu');
      hideElementsByClass(classNamesToHide);
      setTimeout(function(){
        shutuElements.forEach(function(shutuElement) {
          shutuElement.classList.add('yinxing');
        });
      },500);
      setTimeout(function(){
        shutuElements.forEach(function(shutuElement) {
          shutuElement.style.transition = 'opacity 0.5s ease-in-out';
          shutuElement.style.opacity = '0.36';
        });
      },1000);
        removeMijiClassesByIds(province);
        removeLightingClasses();
        var highmijishow = ['北京市','山西省','陕西省','贵州省','广西壮族自治区','福建省','上海市','江苏省','山东省'];
        var midmijishow = ['湖南省','辽宁省','广东省','安徽省'];
        var lowmijishow = ['天津市','内蒙古自治区','云南省','青海省'];
        highmijishow.forEach(function(provinceName) {
            var element = document.getElementById(provinceName);
            if (element) {
                element.classList.add('highmiji');
            }
        });
        midmijishow.forEach(function(provinceName) {
            var element = document.getElementById(provinceName);
            if (element) {
                element.classList.add('midmiji');
            }
        });
        lowmijishow.forEach(function(provinceName) {
            var element = document.getElementById(provinceName);
            if (element) {
                element.classList.add('lowmiji');
            }
        });
    });
});

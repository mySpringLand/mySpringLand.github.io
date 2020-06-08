$(function () {

  var w = 594;
  var h = 786;
  var ibounds = L.latLngBounds(L.latLng(0,0), L.latLng(h, w));
  var map = L.map('map', {
    crs: L.CRS.Simple,
    maxBounds: ibounds,
	minZoom: -0.5,
  }).setView([1700,170], 0);
  var image = L.imageOverlay('udm.SVG', ibounds).addTo(map);
  map.fitBounds(ibounds);

  /// Описание городов
  var cities = {
    1: {
      name: 'Ижевск',
      coords: [285, 375],
      id: 1
    },
    2: {
      name: 'Можга',
      coords: [170, 200],
      id: 2
    },
    3: {
      name: 'Сарапул',
      coords: [170, 470],
      id: 3
    },
    4: {
      name: 'Воткинск',
      coords: [340, 510],
      id: 4
    },
    5: {
      name: 'Глазов',
      coords: [664, 275],
      id: 5
    },
	6: {
      name: 'Грахово',
      coords: [50, 130],
      id: 6
    },
	7: {
      name: 'Алнаши',
      coords: [90, 230],
      id: 7
    },
	8: {
      name: 'Кизнер',
      coords: [115, 70],
      id: 8
    },
	9: {
      name: 'Киясово',
      coords: [135, 355],
      id: 9
    },
	10: {
      name: 'Каракулино',
      coords: [45, 455],
      id: 10
    },
	11: {
      name: 'Камбарка',
      coords: [115, 550],
      id: 11
    },
	12: {
      name: 'Малая Пурга',
      coords: [208, 340],
      id: 12
    },
	13: {
      name: 'Завьялово',
      coords: [280, 415],
      id: 13
    },
	14: {
      name: 'Яр',
      coords: [687, 190],
      id: 14
    },
	15: {
      name: 'Вавож',
      coords: [265, 130],
      id: 15
    },
	16: {
      name: 'Якшур-Бодья',
      coords: [380, 350],
      id: 16
    },
	17: {
      name: 'Ува',
      coords: [325, 170],
      id: 17
    },
	18: {
      name: 'Сюмси',
      coords: [355, 100],
      id: 18
    },
	19: {
      name: 'Селты',
      coords: [425, 180],
      id: 19
    },
	20: {
      name: 'Шаркан',
      coords: [420, 490],
      id: 20
    },
	21: {
      name: 'Дебёсы',
      coords: [515, 485],
      id: 21
    },
	22: {
      name: 'Кез',
      coords: [595, 465],
      id: 22
    },
	23: {
      name: 'Балезино',
      coords: [600, 325],
      id: 23
    },
	24: {
      name: 'Юкаменское',
      coords: [595, 195],
      id: 24
    },
	25: {
      name: 'Красногорское',
      coords: [525, 245],
      id: 25
    },
	26: {
      name: 'Игра',
      coords: [490, 345],
      id: 26
    },
	27: {
      name: 'Учка-кар',
      coords: [690, 210],
      id: 27
    },
    28: {
      name: 'Иднакар',
      coords: [670, 295],
      id: 28
    },
	29: {
      name: 'село Юнда',
      coords: [580, 310],
      id: 29
    },
	30: {
      name: 'село Кулига',
      coords: [680, 475],
      id: 30
    },
	31: {
      name: 'село Пышкет',
      coords: [597, 150],
      id: 31
    },
	32: {
      name: 'село Дёбы',
      coords: [570, 263],
      id: 32
    },
	33: {
      name: 'Заякинская кедровая роща',
      coords: [520, 405],
      id: 33
    },
	34: {
      name: 'гора Байгурезь',
      coords: [525, 485],
      id: 34
    },
	35: {
      name: 'Усадьба Тол Бабая',
      coords: [427, 505],
      id: 35
    },
	36: {
      name: 'Бабьинские горы',
      coords: [340, 95],
      id: 36
    },
	37: {
      name: 'Большая Докья',
      coords: [260, 155],
      id: 37
    },
	38: {
      name: 'центр Удмуртии',
      coords: [375, 280],
      id: 38
    },
	39: {
      name: 'Лудорвая',
      coords: [255, 355],
      id: 39
    },
    40: {
      name: 'Вознесенский храм 1910 года',
      coords: [295, 495],
      id: 40
    },
    41: {
      name: 'Старый Мултан',
      coords: [153, 115],
      id: 41
    },
    42: {
      name: 'музей Веры Толстой',
      coords: [135, 195],
      id: 42
    },
    43: {
      name: 'Кайгурезь',
      coords: [190, 290],
      id: 43
    },
    44: {
      name: 'Сигаевский дендропарк',
      coords: [155, 465],
      id: 44
    },
	45: {
      name: 'Порым',
      coords: [40, 125],
      id: 45
    },
	46: {
      name: 'музейная комната "П. К. Чернов..."',
      coords: [100, 245],
      id: 46
    },
	47: {
      name: 'Никольская церковь Киясовского района',
      coords: [160, 355],
      id: 47
    },
	48: {
      name: 'Музей истории и культуры Камбарского района',
      coords: [120, 545],
      id: 48
    },
	49: {
      name: 'Усть-Бельск',
      coords: [25, 453],
      id: 49
    },
	50: {
      name: 'исток реки "Иж"',
      coords: [400, 370],
      id: 50
    },
	51: {
      name: 'Храм Вознесения Господня в селе Узи',
      coords: [430, 235],
      id: 51
    }
  };

  /// создаем плашки городов и маркеры
  Object.entries(cities).forEach(function (keyVal) {
    city = keyVal[1];
    city.marker = L.marker(city.coords, {
      icon: new L.DivIcon({
        className: 'my-div-icon',
        /// Стилизуя тег ниже - стилизуются маркеры
        html: '<div class="container" data-id="'+city.id+'" style="height: 15px; width: 15px; border: 1px solid"></div>'
      })
    }).addTo(map);

    var cityTag = $('<div class="city city-' + city.id + '" data-id="' + city.id + '">' + city.name + '</div>')
    $('.cities').append(cityTag)
    city.cityTag = cityTag
  })

  // инициализируем перетаскивание
  var draggable = new Draggable.Draggable(document.querySelectorAll('.container'),
    {
      draggable: '.city',
    });
  var container

  // основная магия
  draggable.on('drag:stop', function(e) {
    var city = cities[e.source.dataset.id]
    if(city.id == container.dataset.id) {
      /// тут можно как то иначе выводить сообщение об успехе
      alert('бинго! это ' + city.name)
      city.marker.remove()
      city.marker = L.marker(city.coords, {
        icon: new L.DivIcon({
          className: 'my-div-icon',
          // стилизуя тег ниже - стилизуются итоговые маркеры с городом
          html: '<div class="container" data-id="'+city.id+'" style="color: red; font-size: 10px">'+city.name+'</div>'
        })
      }).addTo(map);
      setTimeout(function () {
        city.cityTag.hide()
      }, 200)
    }
  });
  // сбрасываем активный контейнер если перетаскиваем за его пределы
  draggable.on('drag:out:container', function () {
    container = false
  });
  // выставляем активный контейнер при перетаскивании
  draggable.on('drag:over:container', function(e) {
    container = e.data.overContainer;
  });
});

function showHide(element_id) {
var tabs = document.getElementsByClassName("tab");
for (var i =0 ;i < tabs.length;i++) {
  if (tabs[i].className.split(" ").length == 1) {
	tabs[i].style.display = "none"; 
  }
}

	if (document.getElementById(element_id)) { 
		var obj = document.getElementById('txt_' + element_id); 
		if (obj.style.display != "block") { 
			obj.style.display = "block"; 
		}
		else obj.style.display = "none"; 
	}
	else alert("Элемент с id: " + element_id + " не найден! ыыыыыыыыы" ); 
}  

function showHideMap(element_id) {
var tabs = document.getElementsByClassName("tab");
for (var i =0 ;i < tabs.length;i++) {
  if (tabs[i].className.split(" ").length == 1) {
	tabs[i].style.display = "none"; 
  }
}

	if (document.getElementById("tab_map")) { 
		var obj = document.getElementById("map_tabs"); 
		if (obj.style.display != "block") { 
			obj.style.display = "block"; 
		}
		else obj.style.display = "none"; 
	}
	else alert("Элемент с id: " + element_id + " не найден! ыыыыыыыыы" ); 
} 

function question() {
  var id = "#modal";
  $(id).addClass('active');
}

$(".close_popap").click( function(){
  $(".overlay").removeClass("active");
});
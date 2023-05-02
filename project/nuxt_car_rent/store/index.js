export const state = () => ({
  CarInfo : {
    Name:'Nissan GT-R',
    value: 'Sport Car',
    reviewNum:'123',
    priceInit:'0',
    price:'80.00',
    originPrice:'$100.00',
    reviewCount: 2,
  },
  SelboxLo :[
    {id:1, name:'Select your city'},
    {id:2, name:'seoul'},
    {id:3, name:'Busan'},
    {id:4, name:'Dae-gu'},
    {id:5, name:'gyeonggi-do'},
    {id:6, name:'Suwon'},
  ],
  SelboxDate :[
    {id:1, name:'Select your date'},
    {id:2, name:'mon'},
    {id:3, name:'tue'},
    {id:4, name:'wed'},
    {id:5, name:'thu'},
    {id:6, name:'fir'},
    {id:7, name:'sat'},
    {id:8, name:'sun'},
  ],
  SelboxTime : [
    {id:1, name:'Select your time'},
    {id:2, name:'13:00'},
    {id:3, name:'14:00'},
    {id:4, name:'15:00'},
    {id:5, name:'16:00'},
    {id:6, name:'17:00'},
    {id:7, name:'18:00'},
    {id:8, name:'19:00'},
    {id:9, name:'20:00'},
    {id:10, name:'21:00'},
    {id:11, name:'22:00'},
    {id:12, name:'23:00'},
    {id:13, name:'24:00'},
  ],
  CarListSwipe : [
    {
      id:1,
      isLike:false,
      name:'Koenigsegg',
      type:'Sport',
      carImg:'car_9.png',
      oil:'90L',
      people:'2 People',
      price:'99.00',
    },
    {
      id:2,
      isLike:true,
      name:'Nissan GT - R',
      type:'Sport',
      carImg:'car_10.png',
      oil:'80L',
      people:'2 People',
      price:'80.00',
      originPrice:'$100.00'
    },
    {
      id:3,
      isLike:false,
      name:'Rolls - Royce',
      type:'Sedan',
      carImg:'car_4.png',
      oil:'70L',
      people:'4 People',
      price:'96.00',
    },
    {
      id:4,
      isLike:true,
      name:'Nissan GT - R',
      type:'Sport',
      carImg:'car_10.png',
      oil:'80L',
      people:'2 People',
      price:'80.00',
      originPrice:'$100.00'
    },
  ],
  BasicList :[
    {
      id:1,
      isLike:false,
      name:'All New Rush',
      type:'SUV',
      carImg:'car_5.png',
      oil:'70L',
      people:'6 People',
      price:'72.00',
      originPrice:'$80.00'
    },
    {
      id:2,
      isLike:false,
      name:'CR  - V',
      type:'SUV',
      carImg:'car_6.png',
      oil:'80L',
      people:'6 People',
      price:'80.00',
    },
    {
      id:3,
      isLike:true,
      name:'All New Rush',
      type:'SUV',
      carImg:'car_5.png',
      oil:'90L',
      people:'6 People',
      price:'74.00',
    },
    {
      id:4,
      isLike:false,
      name:'CR  - V',
      type:'SUV',
      carImg:'car_6.png',
      oil:'80L',
      people:'6 People',
      price:'80.00',
    },
    {
      id:5,
      isLike:false,
      name:'MG ZX Exclusice',
      type:'Hatchback',
      carImg:'car_7.png',
      oil:'70L',
      people:'4 People',
      price:'76.00',
      originPrice:'$80.00'
    },
    {
      id:6,
      isLike:true,
      name:'New MG ZS',
      type:'SUV',
      carImg:'car_8.png',
      oil:'80L',
      people:'6 People',
      price:'80.00',
    },
    {
      id:7,
      isLike:false,
      name:'MG ZX Exclusice',
      type:'Hatchback',
      carImg:'car_7.png',
      oil:'70L',
      people:'4 People',
      price:'76.00',
      originPrice:'$80.00'
    },
    {
      id:8,
      isLike:false,
      name:'New MG ZS',
      type:'SUV',
      carImg:'car_8.png',
      oil:'80L',
      people:'6 People',
      price:'80.00',
    },
  ],
  ReviewList :[
    {
      id:1,
      profile: require('~/static/images/contents/profill_1.png'),
      name:'Alex Stanton',
      title:'CEO at Bukalapak',
      date:'21 July 2022',
      review:'We are very happy with the service from the MORENT App. Morent has a low price and also a large variety of cars with good and comfortable facilities. In addition, the service provided by the officers is also very friendly and very polite.',
      reviewCount: 4,
    },
    {
      id:2,
      profile: require('~/static/images/contents/profill_2.png'),
      name:'Skylar Dias',
      title:'CEO at Amazon',
      date:'20 July 2022',
      review:'We are greatly helped by the services of the MORENT Application. Morent has low prices and also a wide variety of cars with good and comfortable facilities. In addition, the service provided by the officers is also very friendly and very polite.',
      reviewCount: 3,
    },
    {
      id:3,
      profile: require('~/static/images/contents/profill_1.png'),
      name:'Skylar Stanton',
      title:'CEO at Bukalapak',
      date:'21 July 2022',
      review:'We are very happy with the service from the MORENT App. Morent has a low price and also a large variety of cars with good and comfortable facilities. In addition, the service provided by the officers is also very friendly and very polite.',
      reviewCount: 2,
    },
    {
      id:4,
      profile: require('~/static/images/contents/profill_2.png'),
      name:'Skylar Alex',
      title:'CEO at Amazon',
      date:'20 July 2022',
      review:'We are greatly helped by the services of the MORENT Application. Morent has low prices and also a wide variety of cars with good and comfortable facilities. In addition, the service provided by the officers is also very friendly and very polite.',
      reviewCount: 1,
    },
  ],
  RecentDeal : [
    {
      id:1,
      Rimg: require('~/static/images/contents/car_2.png'),
      name:'Nissan GT-R',
      value:'Sport Car',
      date:'20 July',
      price:'$80.00',
    },
    {
      id:2,
      Rimg: require('~/static/images/contents/car_1.png'),
      name:'Koegnigsegg',
      value:'Sport Car',
      date:'19 July',
      price:'$99.00',
    },
    {
      id:3,
      Rimg: require('~/static/images/contents/car_4.png'),
      name:'Rolls-Royce',
      value:'Sport Car',
      date:'18 July',
      price:'$96.00',
    },
    {
      id:4,
      Rimg: require('~/static/images/contents/car_5.png'),
      name:'CR-V',
      value:'SUV',
      date:'17 July',
      price:'$80.00',
    }
  ],
  isMobile : false,
  cpToggleFltrNav: false,
  cpToggleMenu:false,
  isSwiper:false,
  listMore:false,


})

export const mutations = {
  filter(state){
      state.cpToggleFltrNav = !state.cpToggleFltrNav;
  },
  menu(state){
      state.cpToggleMenu = !state.cpToggleMenu;
  },
  toggleBtnLike(state, item){
    item.isLike = !item.isLike
  },
  show(state){
    state.listMore = !state.listMore;
  },
  checkDevice(state) {
    const UserAgent = navigator.userAgent;
    if (UserAgent.match(/iPhone|iPod|Android|Windows CE|BlackBerry|Symbian|Windows Phone|webOS|Opera Mini|Opera Mobi|POLARIS|IEMobile|lgtelecom|nokia|SonyEricsson/i) != null || UserAgent.match(/LG|SAMSUNG|Samsung/) != null)
    {
      state.isMobile = true;
    }else{
      state.isMobile = false;
    }
  },
}

// 배열복사해서 배열의 4번째까지 보여주기
export const getters ={
  resetArray(state){
    const reset = state.BasicList;
    const resetcopy = [...reset];
    return resetcopy.splice(0, 4);
  }
}

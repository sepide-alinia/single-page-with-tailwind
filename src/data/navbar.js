export  const navbar = [
  {
    title: "+  صفحه اصلی",
    children: [
      { title: "1 صفحه اصلی" },
      { title: "2 صفحه اصلی" },
      { title: "3 صفحه اصلی" },
      { title: "4 صفحه اصلی" },
    ],
  },
  {
    title: "درباره ما",
  },
  {
    title: "+ خدمات",
    children: [
      { title: "1 خدمات" },
      {
        title: "2 خدمات",
        children: [
          { title: "1 جزئیات خدمات" },
          { title: "2 جزئیات خدمات" },
          { title: "جزئیات خدمات" ,
            children:[
                {title:'ساید بار سمت راست'},
                {title:'ساید بار سمت چپ'},
            ]
          },
        ],
      },
    ],
  },
{
   title:' + پروژه ها',
   children:[
    {title:'پروژه ها'},
    {title:'جزئیات پروژه ها',
        children:[
            {title:'پروژه تمام عرض'},
            {title:'پروژه ساید بار سمت چپ'},
            {title:'پروژه ساید بار سمت راست'},
        ]
    }
   ] 
},
{
    title:' + وبلاگ',
    children:[
        {title:'وبلاگ'},
        {title:'پست تکی',
            children:[
                {title:'پست ساید بار سمت چپ'},
                {title:'پست ساید بار سمت راست'},
                {title:'پست نوع گالری'},
                {title:'پست نوع ویدئو'},
                {title:'پست نوع فایل صوتی'},
            ]
        },
    ]
},{
    title:' + برگه ها',
    children:[
        {title:'تیم ما'},
        {title:'جزئیات تیم'},
    ]
},{
    title:' + تماس با ما',
    children:[
        {title:'تماس با ما 1'},
        {title:'تماس با ما 2'},
    ]
}
];


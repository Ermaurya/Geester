// Check from the objects.js file g_class. Give the list of students which have greater than or equal to 85 marks.

var g_class = {
    'name': "Dec21WebFundamentals",
    'instructor': {
      'name': "Aayush Sinha",
      'subject': "MERN"
    },
    'students': [{
        'name': 'Ujjwal',
        'marks': 80,
      },
      {
        'name': 'Anshul',
        'marks': 70,
      },
      {
        'name': 'Lasya',
        'marks': 77,
      },
      {
        'name': 'Ayush',
        'marks': 89,
      },
      {
       'name': 'Gourav',
       'marks': 90,
      },
      {
       'name': 'Niladri',
       'marks': 85,
      },
      {
       'name': 'Ugrasen',
       'marks': 87,
      }
    ],
  };
  var a=g_class.students;
  for(var i=0; i<a.length;i++)
  {
      if(a[i].marks >= 85)
          console.log(a[i].name);
  }
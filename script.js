let data = [
    {
      "title": "Work",
      "timeframes": {
        "daily": {
          "current": 5,
          "previous": 7
        },
        "weekly": {
          "current": 32,
          "previous": 36
        },
        "monthly": {
          "current": 103,
          "previous": 128
        }
      }
    },
    {
      "title": "Play",
      "timeframes": {
        "daily": {
          "current": 1,
          "previous": 2
        },
        "weekly": {
          "current": 10,
          "previous": 8
        },
        "monthly": {
          "current": 23,
          "previous": 29
        }
      }
    },
    {
      "title": "Study",
      "timeframes": {
        "daily": {
          "current": 0,
          "previous": 1
        },
        "weekly": {
          "current": 4,
          "previous": 7
        },
        "monthly": {
          "current": 13,
          "previous": 19
        }
      }
    },
    {
      "title": "Exercise",
      "timeframes": {
        "daily": {
          "current": 1,
          "previous": 1
        },
        "weekly": {
          "current": 4,
          "previous": 5
        },
        "monthly": {
          "current": 11,
          "previous": 18
        }
      }
    },
    {
      "title": "Social",
      "timeframes": {
        "daily": {
          "current": 1,
          "previous": 3
        },
        "weekly": {
          "current": 5,
          "previous": 10
        },
        "monthly": {
          "current": 21,
          "previous": 23
        }
      }
    },
    {
      "title": "Self Care",
      "timeframes": {
        "daily": {
          "current": 0,
          "previous": 1
        },
        "weekly": {
          "current": 2,
          "previous": 2
        },
        "monthly": {
          "current": 7,
          "previous": 11
        }
      }
    }
]

const dailyButton = document.getElementById('daily');

const weeklyButton = document.getElementById('weekly');
const monthlyButton = document.getElementById('monthly');
const dailyTimes = document.querySelectorAll('.daily')
const previousTimesDaily = document.querySelectorAll('.previous-daily')
const weeklyTimes = document.querySelectorAll('.weekly')
const previousTimesWeekly = document.querySelectorAll('.previous-weekly')
const monthlyTimes = document.querySelectorAll('.monthly')
const previousTimesMonthly = document.querySelectorAll('.previous-monthly')

const dailyDiv = document.querySelectorAll('.flex-hours-daily')
const weeklyDiv = document.querySelectorAll('.flex-hours-weekly')
const monthlyDiv = document.querySelectorAll('.flex-hours-monthly')

for( let i = 0; i < data.length; i++ ) {
monthlyDiv[i].classList.remove("hidden")
dailyDiv[i].classList.add("hidden")
weeklyDiv[i].classList.add("hidden")
}


dailyButton.addEventListener('click', () => {

    console.log(data);
    console.log(data.length);
    for( let i = 0; i < data.length; i++ ) {
        dailyDiv[i].classList.remove("hidden")
        weeklyDiv[i].classList.add("hidden")
        monthlyDiv[i].classList.add("hidden")
    }
    
    let index = 0;
    dailyTimes.forEach((dailyTime) => {
            // console.log(data[index])
        if(data[index].timeframes.daily.current == 1) {
            dailyTime.innerHTML = `${data[index].timeframes.daily.current}hr`
            index++;
        } else {
            dailyTime.innerHTML = `${data[index].timeframes.daily.current}hrs`
            index++;
        }
            
    })
    let index2 = 0
    previousTimesDaily.forEach((previousTimeDaily) => {
        if(data[index2].timeframes.daily.previous == 1) {
            previousTimeDaily.innerHTML = `Yesterday - ${data[index2].timeframes.daily.previous}hr`
            index2++;
        } else {
            previousTimeDaily.innerHTML = `Yesterday - ${data[index2].timeframes.daily.previous}hrs`
            index2++;
        }
    })
});

weeklyButton.addEventListener('click', () => {
    console.log(data);
    console.log(data.length);

    for(let i = 0; i < data.length; i++) {
        weeklyDiv[i].classList.remove("hidden")
        dailyDiv[i].classList.add("hidden")
        monthlyDiv[i].classList.add("hidden")
    }
    

    let index = 0;
    weeklyTimes.forEach((weeklyTime) => {
            // console.log(data[index])
        if(data[index].timeframes.weekly.current == 1) {
            weeklyTime.innerHTML = `${data[index].timeframes.weekly.current}hr`
            index++;
        } else {
            weeklyTime.innerHTML = `${data[index].timeframes.weekly.current}hrs`
            index++;
        }
            
    })
    let index2 = 0
    previousTimesWeekly.forEach((previousTimeWeekly) => {
        if(data[index2].timeframes.weekly.previous == 1) {
            previousTimeWeekly.innerHTML = `Last week - ${data[index2].timeframes.weekly.previous}hr`
            index2++;
        } else {
            previousTimeWeekly.innerHTML = `Last week - ${data[index2].timeframes.weekly.previous}hrs`
            index2++;
        }
    })
});


monthlyButton.addEventListener('click', () => {
    console.log(data);
    console.log(data.length);

    for(let i = 0; i < data.length; i++) {
        monthlyDiv[i].classList.remove("hidden")
        dailyDiv[i].classList.add("hidden")
        weeklyDiv[i].classList.add("hidden")
    }
   

    let index = 0;
    monthlyTimes.forEach((monthlyTime) => {
            // console.log(data[index])
        if(data[index].timeframes.weekly.current == 1) {
            monthlyTime.innerHTML = `${data[index].timeframes.monthly.current}hr`
            index++;
        } else {
            monthlyTime.innerHTML = `${data[index].timeframes.monthly.current}hrs`
            index++;
        }
            
    })
    let index2 = 0
    previousTimesMonthly.forEach((previousTimeMonthly) => {
        if(data[index2].timeframes.weekly.previous == 1) {
            previousTimeMonthly.innerHTML = `Last month - ${data[index2].timeframes.monthly.previous}hr`
            index2++;
        } else {
            previousTimeMonthly.innerHTML = `Last month - ${data[index2].timeframes.monthly.previous}hrs`
            index2++;
        }
    })
});


dailyButton.click();
    
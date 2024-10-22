const vm = Vue.createApp({
    data(){
        return {
            arr: [
              { Name: 'John', Surname: 'Smith', Birthyear: 1990, City: 'New York', Occupation: 'Engineer' },
              { Name: 'Anna', Surname: 'Doe', Birthyear: 1991, City: 'Los Angeles', Occupation: 'Teacher' },
              { Name: 'Michael', Surname: 'Brown', Birthyear: 1985, City: 'Chicago', Occupation: 'Doctor' },
              { Name: 'Emily', Surname: 'Clark', Birthyear: 1992, City: 'Houston', Occupation: 'Nurse' },
              { Name: 'David', Surname: 'Johnson', Birthyear: 1988, City: 'Phoenix', Occupation: 'Lawyer' },
              { Name: 'Sophia', Surname: 'White', Birthyear: 1993, City: 'Philadelphia', Occupation: 'Artist' },
              { Name: 'Daniel', Surname: 'Jones', Birthyear: 1990, City: 'San Antonio', Occupation: 'Architect' },
              { Name: 'Olivia', Surname: 'Miller', Birthyear: 1995, City: 'San Diego', Occupation: 'Designer' },
              { Name: 'Matthew', Surname: 'Wilson', Birthyear: 1989, City: 'Dallas', Occupation: 'Chef' },
              { Name: 'Emma', Surname: 'Taylor', Birthyear: 1992, City: 'San Jose', Occupation: 'Photographer' },
              { Name: 'James', Surname: 'Anderson', Birthyear: 1991, City: 'Austin', Occupation: 'Developer' },
              { Name: 'Isabella', Surname: 'Thomas', Birthyear: 1994, City: 'Jacksonville', Occupation: 'Musician' },
              { Name: 'Liam', Surname: 'Martinez', Birthyear: 1987, City: 'San Francisco', Occupation: 'Writer' },
              { Name: 'Mia', Surname: 'Garcia', Birthyear: 1993, City: 'Columbus', Occupation: 'Journalist' },
              { Name: 'William', Surname: 'Lopez', Birthyear: 1986, City: 'Fort Worth', Occupation: 'Pilot' }
            ]
          }          
    }
}).mount("#app")
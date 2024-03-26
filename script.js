const data = {
    "name": "srinithi",
    "email": "srinithimaheswaran16@gmail.com",
    "phone": "9345515687",
    "address": "coimbatore",
    "education": "Mcom",
    "CGPA": "72",
    "languages": ["tamil", "english"],
    "skills": ["JavaScript", "React", "HTML", "CSS", "Git"]
  };
  

//for loop

const keys = Object.keys(data);
for (let i = 0; i < keys.length; i++) {
  const key = keys[i];
  console.log(key + ": " + data [key]);
}

//For in 
for (let key in data) {
    console.log(key + ": " + data[key]);
  }

  // for of
  const entries = Object.entries(data);
for (let entry of entries) {
  console.log(entry[0] + ": " + entry[1]);
}

//for each

data.skills.forEach(function(skill) {
    console.log(skill);
  });

  
    
    
   
    
   

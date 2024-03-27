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
  const value = data[key];
  console.log(key + ": " + value);
} 
//For in 
for (let key in data) {
  const value = data[key];
  console.log(key + ": " + value);
}

  // for of
  
const entries = Object.entries(data);
for (let [key, value] of entries) {
  console.log(key + ": " + value);
}

//for each

data.skills.forEach(skill => console.log(skill));
  
    
    
   
    
   

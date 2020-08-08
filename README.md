# frequency-counter
A nodejs js, React based single page application that takes number(n) form user and display top n words inside the file hosted at https://terriblytinytales.com/test.txt.

# App Hosting
  https://powerful-river-66941.herokuapp.com/

# Components
 ### get: "/" :
  
  serve the index.html file of react application
### post : "/api/fetch:' "

  fetch the text file from backend and return top n word of file as json. then the state get updated and render a component of table containing list of words.
  
  if error in fetching the file because of internet or other issue return a txt message saying "Fail to fetch file try Again".
  
# Test Cases
### N= -1 :
Screensort: [https://drive.google.com/file/d/1-ZXGgs9IskkPpJNDUuFNqjYq8QUcXqOg/view?usp=sharing]

### N= 8 :
Screensort :[https://drive.google.com/file/d/1XOMMC7DHSZXYjtLVZir-eQ5KBddqNPfa/view?usp=sharing]

### N=1000: (which is greater then total words in the file)

Screensort : [https://drive.google.com/file/d/1jXrbJazbAPJfwxe0bOfDzE9uyuDPyCRF/view?usp=sharing]

Return all available words int the file with frequency.

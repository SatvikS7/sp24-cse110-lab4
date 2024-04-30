**Question 1:** It prints out 3 because there are 3 items in prices so once the for loop reaches 3, it breaks. \
**Question 2:** It prints out 150 because discountedPrice contains the discounted value of the last item (50% of 300 is 150). \
**Question 3:** It prints out 150 because finalPrice contains the rounded price of a discounted item. Since 50% of 300 is still an integer, the rounding does not do anything so the finalPrice is still 150. \
**Question 4:** Yes, the code does run because it is returning an array of finalPrices ([50, 100, 150]) and all of these prices are calculated without any errors. \
**Question 5:** There is an error because the variable i only exists within the for loop and cannot be accessed outside of it. \
**Question 6:** Similarly to the previous question, there is an error because discountedPrice only exists within the for loop. \ 
**Question 7:** It prints out 150 because the variable was declared in the same scope of the function and the last value it held was 150. \
**Question 8:** It returns [50, 100, 150]. The variable was instantiated in the same scope so it can be accessed and it contains the final discounted prices of the original prices. \
**Questions 9:** There is an error because the variable i only exists within the for loop and cannot be accessed outside of it. \
**Question 10:** It prints out 3 because the variable can be accessed and there are 3 elements in the prices array. \
**Question 11:** It returns [50, 100, 150]. Even though the variable is a const, you are still able to add to the array or change the elements so it does not cause an error. \
**Question 12:** 
  - A. student.name
  - B. student["Grad Year"]
  - C. student.greeting()
  - D. student["Favorite Teacher"].name
  - E. student.courseLoad[0]

**Question 13:** 
- A. 32, treats 2 as a string and concatenates
- B. 1, treats 3 as an int and subtracts
- C. 3, treats null as 0
- D. 3null, treats null as a string
- E. 4, true treated as a 1
- F. 0, both treated as a 0
- G. 3undefined, undefined treated as a string and concatenates
- H. NaN, '3' treated as an in and subtracting with an undefined number causes an Nan result
  
**Question 14:** 
  - A. True, treats '2' as an int
  - B. False, compares the strings lexographically
  - C. True, treats '2' as an int
  - D. False, === checks if the two variables of the same type aswell
  - E. False, treats true as a 1
  - F. True, anything not 0 will be considered true when wrapped with a boolean

**Question 15:** '==' is equals and '===' is strictly equals. '===' not only checks the value similariy to '==' but it also checks if the types are the same. \
**Question 17:** When modifyArray([1,2,3], doSomething) is called array = [1,2,3] and callback = doSomething. Inside modifyArray, the function doSomething is called with each of the elements from the array being the input. The function doSomething multiplies its input by 2 and returns it. This means that the new array returned by modifyArray for each element doubled from the original array.  \
**Question 19:** 1 4 3 2

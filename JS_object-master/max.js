var my_dict = { 'a':50, 'b':58, 'c':56, 'd':40, 'e':100, 'f':20}
a=Object.values(my_dict)
first_max=a[0]
sec_max=a[1]
third_max=a[2]
for(i in a){
    if (first_max<a[i]){
        first_max=a[i]
    }
    else if(first_max<a[i]){
        sec_max=a[i]
    }
    if(first_max<a[i]){
        third_max=a[i]
    }   
}
console.log("first max-",first_max,"second max-",sec_max,"third max-",third_max);
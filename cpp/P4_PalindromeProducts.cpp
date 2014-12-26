#include <iostream>
#include <math.h>

int isPalindrome(double n){
    double number = n;
    double reverse = 0;
    while(n!=0){
        reverse = reverse*10 + fmod(n,10);
        n = floor(n/10);
    }
    if(number==reverse)
        return 1;
    else
        return 0;
}

int main(){

    double largest = 0;
    double temp = 0;
    for(int i=100; i<999; i++){
        for(int j=101; j<999; j++){
            temp = i*j;
            if(isPalindrome(temp)==1){
                if(temp>largest)
                    largest = temp;
                std::cout<<"Palindrome : "<<temp<<std::endl;
            }
        }
    }

    std::cout<<"Largest palindrome : "<<largest<<std::endl;

}

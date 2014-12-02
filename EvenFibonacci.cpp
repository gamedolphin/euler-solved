#include <iostream>
#include <math.h>

int main(){

    double a = 1, b = 2;
    double n = 2;
    double sum = 0;
    while(n<4000000){
        if(fmod(n,2)==0){
            sum += n;
            std::cout<<n<<std::endl;
        }
        n = a + b;
        a = b;
        b = n;
    }
    std::cout.precision(10);
    std::cout<<"Sum : "<<std::fixed<<sum<<std::endl;

    return 0;
}

#include<iostream>
#include<math.h>

double largestFactor(double n){

    double largest = 0;

    while(fmod(n,2)==0){
        n = n/2;
        std::cout<<"2 is a factor, after dividing : "<<n<<std::endl;

        largest = 2;
    }

    for(int i=3; i<=sqrt(n); i+=2){

        while(fmod(n,i)==0){
            std::cout<<i<<" is a factor as well!"<<std::endl;
            n = n/i;
            largest = i;
        }
    }

    if(n>2){
        largest = n;
        std::cout<<n<<" is a factor too!"<<std::endl;
    }

    return largest;
}

int main(){
    // double n = 13195;
    double n = 600851475143;

    double largest  = largestFactor(n);

    std::cout<<"Largest prime factor of "<<n<<" is "<<largest<<std::endl;
}

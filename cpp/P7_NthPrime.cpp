#include <iostream>
#include <vector>
#include <math.h>

double nthPrime(double nth){

    double currentPrime = 0;

    std::vector<double> listOfPrimes;

    if(nth==1)
        return 2;

    listOfPrimes.push_back(2);
    currentPrime = 1;

    for(double i=3;;i+=2){
        int flag = 1;
        double sqr = sqrt(i);
        for(auto obj : listOfPrimes){
            if(obj>sqr)
                continue;
            if(fmod(i,obj)==0){
                flag = 0;
                break;
            }
        }
        if(flag==1){
            listOfPrimes.push_back(i);
            currentPrime += 1;
        }

        if(currentPrime==nth)
            return i;
    }
}

int main(){

    double nth = 10001;

    double nthP = nthPrime(nth);

    std::cout.precision(10);
    std::cout<<"The "<<nth<<" prime is "<<std::fixed<<nthP;

    return 0;
}

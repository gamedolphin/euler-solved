#include <iostream>

double sumOfSquares(int n){
    return (n*(n+1)*(2*n+1))/6;
}

double sumOf(int n){
    return (n*(n+1))/2;
}

int main(){

    int totalNum = 100;

    double sum = sumOf(totalNum);
    double sumSq = sum*sum;

    double difference = sumSq - sumOfSquares(totalNum);

    std::cout.precision(10);
    std::cout<<"Difference is "<<std::fixed<<difference;

    return 0;
}

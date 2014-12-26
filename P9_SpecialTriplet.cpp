#include <iostream>

int main(){

    int a,b,c;
    int requiredSum = 1000;

    int N = 1000; //set upper limits on number of triplets searched

    for(int i=1; i<=N; i++){
        int j = i+1;
        int k = j+1;
        int found = 0;
        while(k<=N || found!=0){
            while(k*k < i*i + j*j)
                k = k+1;
            if(k*k == i*i + j*j && k <=N && i+j+k==requiredSum){
                a = i; b = j; c = k;
                found = 1;
                break;
            }
            j = j+1;
        }
    }
    std::cout<<"Triplets : "<<a<<" "<<b<<" "<<c<<std::endl;
    std::cout<<"The product of the triplets is "<<a*b*c;
}

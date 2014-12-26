#include <iostream>
#include <math.h>
#include <vector>

std::vector<double> factorsOf(double num){
    std::vector<double> list;

    while(fmod(num,2)==0){
        num = num/2;

        list.push_back(2);
    }

    for(int i=3; i<=sqrt(num); i+=2){

        while(fmod(num,i)==0){
            list.push_back(i);
            num = num/i;
        }
    }

    if(num>2){
        list.push_back(num);
    }

    return list;
}

int containsObject(std::vector<double> arr, double num){

    for(auto obj : arr){
        if(obj==num)
            return 1;
    }
    return 0;
}

int countObjects(std::vector<double> arr, double num){
    int count = 0;
    for(auto obj : arr){
        if(obj==num)
            count++;
    }
    return count;
}

int main(){

    int min = 1;
    int max = 20;
    std::vector<double> factors;

    for(int i=min; i<=max; i++){
        auto list = factorsOf(i);
        std::vector<double> listOfDone;
        for(auto obj : list){
            if(containsObject(listOfDone,obj))
                continue;
            double totalNum = countObjects(list,obj);
            double inFactors = countObjects(factors,obj);
            if(totalNum>inFactors){
                for(int j=0;j<totalNum-inFactors;j++)
                    factors.push_back(obj);
            }
            listOfDone.push_back(obj);
        }
    }
    double product = 1;
    for(auto obj : factors){
        product *= obj;
    }
    std::cout.precision(10);
    std::cout<<"The number is "<<std::fixed<<product<<std::endl;
    return 0;
}


/*
Brute force, too long, inefficient

  int isDivisible(double num,double minDivisor, double maxDivisor){

  int isDiv = 1;
  for(int i=minDivisor; i<=maxDivisor; i++){
  if(fmod(num,i)!=0){
  isDiv = 0;
  break;
  }
  }
  return isDiv;
  }

  int main(){
  bool found = false;
  double num = 2520;
  while(!found){
  if(isDivisible(num,1,20)){
  found = true;
  }
  else
  num += 1;

  std::cout<<num<<std::endl;
  }

  std::cout<<"Largest number : "<<num<<std::endl;
  }

*/

#include <iostream>
#include <vector>


/*
  Uses Eratosthenes Sieve
*/

int main(){

    double maxSize = 2000000;

    std::vector<int> list;
    if(list.max_size() < maxSize){
        std::cout<<"Not enough memory for seive";
        return 0;
    }

    list.reserve(maxSize);

    for(double i=0;i<maxSize;i++)
        list.push_back(1);

    double sum = 0;

    list[0] = 0;
    list[1] = 0;

    double p = 2;
    bool found = true;
    while(found){
        double count = 2;
        double multiple = count*p;
        while(multiple<list.size()){
            if(list[multiple]!=0){
                list[multiple] = 0;
            }
            count++;
            multiple = count*p;
        }
        for(double i=p+1;i<list.size();i++){
            found = false;
            if(p<i && list[i]!=0){
                found = true;
                p = i;
                std::cout<<p<<std::endl;
                break;
            }
        }
    }

    std::cout<<"DONE CALCUATING!"<<std::endl;
    for(auto i = list.begin(); i!= list.end(); i++){
        if(*i!=0){
            sum += (i - list.begin()); //get index and add to sum
        }
    }

    std::cout.precision(10);
    std::cout<<"Sum : "<<std::fixed<<sum;
}

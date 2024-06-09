const hasContigousSubarray=(array, target)=>{
    let left = 0;
    let currentSum = 0

    for(let right = 0; right < array.length; right++){
        currentSum+=array[right];
        while(currentSum>target && left<=right){
            currentSum-=array[left];
            left++;
        }

        if(currentSum===target){
            return true;
        }
    }
    return false;
}

//example

const array =[4,2,7,1,9,5];
const target =14;
console.log(hasContigousSubarray(array,target));
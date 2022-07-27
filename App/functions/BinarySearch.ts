/* eslint-disable prettier/prettier */
export class binarySearch{

    binarySearch(arr:number[], l:number, r:number, x:number): number{
        console.log(arr+" arreglo ")
        console.log(x+"  incognita")
        console.log(l+"---->  l  "+r+" -----> r")
        if (r >= l) {
         const mid: number= Math.round(l + (r - l) / 2);
         console.log(mid+"---->  mid")
            // If the element is present at the
            // middle itself
            if (arr[mid] == x){
                return mid;
            }
            // If element is smaller than mid, then
            // it can only be present in left subarray
            if (arr[mid] > x){
                return this.binarySearch(arr, l, mid - 1, x);
            }
            // Else the element can only be present
            // in right subarray
            return this.binarySearch(arr, mid + 1, r, x);
            
        }
        return -1;
    }


}
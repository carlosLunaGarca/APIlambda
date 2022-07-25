/* eslint-disable prettier/prettier */
import { DataArray } from './../schemas/SchemaArray';
export function MergeSort(params: DataArray) {
    console.log(JSON.stringify(params)+" entrada del API");
    Sort(params.DataList, 0, params.DataList.length - 1)
    
    
    return params;
}

function Merge(array:number[],l:number,m:number,r:number) {
    const n1 =Math.round( m - l + 1);
    const n2 = Math.round(r - m);

        /* Create temp arrays */
        let L  = new Array(n1);
        let R  = new Array(n2);
  
        /*Copy data to temp arrays*/
        for (let i = 0; i < n1; ++i){
            L[i] = array[l + i];
        }
        for (let j = 0; j < n2; ++j){
            R[j] = array[m + 1 + j];
        }
  
        /* Merge the temp arrays */
  
        // Initial indexes of first and second subarrays
        let i = 0, j = 0;
  
        // Initial index of merged subarray array
        let k = l;
        while (i < n1 && j < n2) {
            if (L[i] <= R[j]) {
                array[k] = L[i];
                i++;
            }
            else {
                array[k] = R[j];
                j++;
            }
            k++;
        }
  
        /* Copy remaining elements of L[] if any */
        while (i < n1) {
            array[k] = L[i];
            i++;
            k++;
        }
  
        /* Copy remaining elements of R[] if any */
        while (j < n2) {
            array[k] = R[j];
            j++;
            k++;
        }
}

function Sort(array:number[],l:number,r:number) {
    if(l<r){

        const m=Math.floor(l+(r-l)/2);

        Sort(array,l,m);
        Sort(array,m+1,r);

        Merge(array,l,m,r);
    }
}
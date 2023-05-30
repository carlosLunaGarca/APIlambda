/* eslint-disable prettier/prettier */
import { dataIndex } from './../schemas/PositionData';
export class MergeSort  {
     indexes!: dataIndex[];

    
constructor(array:number[]){
    console.log(array);
    this.indexes= new Array(array.length);
for(let i=0;i < array.length;i++){
    this.indexes[i]={
        data: array[i]+"",
        index:i
    }
}


}
 Merge(array:number[],l:number,m:number,r:number,indexes:dataIndex[]) {
    const n1 =Math.round( m - l + 1);
    const n2 = Math.round(r - m);

        /* Create temp arrays */
        const L  = new Array(n1);
        const Lindex = new Array(n1)

        const R  = new Array(n2);
        const Rindex = new Array(n2)
        /*Copy data to temp arrays*/
        for (let i = 0; i < n1; ++i){
            L[i] = array[l + i];
            Lindex[i]=indexes[l+i]

        }
        for (let j = 0; j < n2; ++j){
            R[j] = array[m + 1 + j];
            Rindex[j]=indexes[m+1+j]
        }
  
        /* Merge the temp arrays */
  
        // Initial indexes of first and second subarrays
        let i = 0, j = 0;
  
        // Initial index of merged subarray array
        let k = l;
        while (i < n1 && j < n2) {
            if (L[i] <= R[j]) {
                array[k] = L[i];
                indexes[k]=Lindex[i]
                i++;
            }
            else {
                array[k] = R[j];
                indexes[k]=Rindex[j]
                j++;
            }
            k++;
        }
  
        /* Copy remaining elements of L[] if any */
        while (i < n1) {
            array[k] = L[i];
            indexes[k]=Lindex[i]
            i++;
            k++;
        }
  
        /* Copy remaining elements of R[] if any */
        while (j < n2) {
            array[k] = R[j];
            indexes[k]=Rindex[j]
            j++;
            k++;
        }
}

 Sort(array:number[],l:number,r:number,indexes:dataIndex[]) {
    if(l<r){

        const m=Math.floor(l+(r-l)/2);

        this.Sort(array,l,m,indexes);
        this.Sort(array,m+1,r,indexes);

        this.Merge(array,l,m,r,indexes);
    }
}

}
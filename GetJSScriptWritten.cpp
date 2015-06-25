#include<stdio.h>
#include<stdlib.h>
#include<string.h>
int main(int args,char* argv[]){
    FILE* fptr = fopen("JSFileList.txt","r");
    char temp[500];
    while(fscanf(fptr,"%s",temp)>0){
        printf("<script src=\"js/%s\"></script>\n",temp);
    }
    fclose(fptr);
    return 0;
}

// #include <stdio.h>
// int main(){
//     int arr1[3][3];
//     int ch;
//     printf("Welcome to Tic Tac to game.\n");
//     printf("Before starting first I tell you that the 1 and 2 are inputs used in game.\n");
//     for (int i = 0; i < 3; i++)
//     {
//         for (int j = 0; j < 3; j++)
//         {
//             arr1[i][j]=0;
//             printf(" %d |",arr1[i][j]);
//         }
//         printf("\n");
//     }
//     printf("First player turn :");
//     scanf("%d", &ch);
//     switch (ch)
//     {
//     case 1:
//         arr1[0][0]=1;
//         break;
    
//     default:
//         break;
//     }
//     return 0;
// }

#include <stdio.h>

int main()
{
    int x, y, i = 0;
    printf("Enter num: ");
    scanf("%d", &x);
    while(x<0){
        y = x%10;
        i = i*10 + y;
        x = x/10;
        return i;
    }
    printf("%d", i);

    return 0;
}

/**
 * File:    backtrace.c
 * Author:  willfox
 * Date:    2018-07-28
 * Description:  backtrace test
 * Usage:  
 *      make:       cc -rdynamic backtrace.c -o backtrace 
 *      example:    ./backtrace 4
 * 
 * Result:   (Ubuntu 16.04.3 LTS)
 *           backtrace 0: 0x400a3a        : ./backtrace(bt_print_backtrace+0x64) [0x400a3a]
 *           backtrace 1: 0x400b1a        : ./backtrace(bt_func2+0x9) [0x400b1a]
 *           backtrace 2: 0x400b46        : ./backtrace(bt_func1+0x25) [0x400b46]
 *           backtrace 3: 0x400b3f        : ./backtrace(bt_func1+0x1e) [0x400b3f]
 *           backtrace 4: 0x400b3f        : ./backtrace(bt_func1+0x1e) [0x400b3f]
 *           backtrace 5: 0x400b3f        : ./backtrace(bt_func1+0x1e) [0x400b3f]
 *           backtrace 6: 0x400b8d        : ./backtrace(main+0x40) [0x400b8d]
 *           backtrace 7: 0x7f19668a9830  : /lib/x86_64-linux-gnu/libc.so.6(__libc_start_main+0xf0) [0x7f19668a9830]
 *           backtrace 8: 0x400909        : ./backtrace(_start+0x29) [0x400909]
 *
 * Warning: all functions(bt_func2、bt_func1) can not be static, or backtrace will not print symbols
 * 
 **/


#include <stdio.h>
#include <stdlib.h>
#include <execinfo.h>

// Warning: bt_print_backtrace can not be static
int bt_print_backtrace(void)
{
    int sz = 0;
    int i = 0;
    void *bt[32] = {NULL};
    char **symbols = NULL;

    sz = backtrace(bt, 32);
    if (sz <= 0)
    {
        return -1;
    }
    symbols = backtrace_symbols(bt, sz);
    if(NULL == symbols)
    {
        return -1;
    }
    for (i=0; i<sz; i++)
    {
        printf("backtrace %d: %-16p: %s\n", i, bt[i], symbols[i]);
    }

    free(symbols);
    return 0;
}

int bt_func2(void)
{
    bt_print_backtrace();
    return 0;
}
int bt_func1(int ncalls)
{
    if(ncalls > 1)
    {
        bt_func1(ncalls-1);
    }
    else
    {
        bt_func2();
    }
    return 0;
}

int main(int argc, char *argv[])
{
    if(argc < 2)
    {
        printf("please input backtrace ncalls\n");
        return 0;
    }
    bt_func1(atoi(argv[1]));
    return 0;
}

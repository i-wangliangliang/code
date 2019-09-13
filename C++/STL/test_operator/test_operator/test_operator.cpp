// test_operator.cpp : Defines the entry point for the console application.
// 运行环境： Visual Studio 2005
// 功能： 用于测试运算符重载, 测试结果：
//         1、运算符重载，返回必须是值， 而不能是引用， 因为局部变量在函数结束时自动释放，返回后将不能使用；
//		   2、运算符重载函数中的入参， 可以是值传递，也可以是引用传递，区别是：值传递时需要分配额外资源；
//         3、运算符重载函数的通用写法。

#include "stdafx.h"
#include <iostream>
using namespace std;

class Foo {
private:
	int size;
protected:
public:
	Foo(void)
	{
		printf("Foo Constructor without value\n");
	}
	Foo(int size)
	{
		this->size = size;
		printf("Foo Constructor with value %d\n", this->size);
	}
	~Foo(void)
	{
		printf("Foo Destructor, size is %d\n", this->size);
		this->size = 0;
	}
	void Setter(int size)
	{
		this->size = size;
	}

	int Getter(void)
	{
		return this->size;
	}
};

/*
 * 如果入参是值传递， 那么在参数传入的时候， 会额外分配f1, f2的资源，此时会打印f1, f2的Constructor，此函数结束之后f1, f2 Destructor;
 * 如果入参是引用传递， 那么就不会分配额外的资源， 直接使用上一层函数分配的变量。
*/
Foo operator+(Foo &f1, Foo &f2)
{
	Foo f(f1.Getter() + f2.Getter());
	return f;
}

int _tmain(int argc, _TCHAR* argv[])
{
	Foo f1(1), f2(2);
	Foo f3 = f1 + f2;
	printf("%d\n", f3.Getter());
	return 0;
}


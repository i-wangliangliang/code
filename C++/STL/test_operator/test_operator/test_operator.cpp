// test_operator.cpp : Defines the entry point for the console application.
// ���л����� Visual Studio 2005
// ���ܣ� ���ڲ������������, ���Խ����
//         1����������أ����ر�����ֵ�� �����������ã� ��Ϊ�ֲ������ں�������ʱ�Զ��ͷţ����غ󽫲���ʹ�ã�
//		   2����������غ����е���Σ� ������ֵ���ݣ�Ҳ���������ô��ݣ������ǣ�ֵ����ʱ��Ҫ���������Դ��
//         3����������غ�����ͨ��д����

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
 * ��������ֵ���ݣ� ��ô�ڲ��������ʱ�� ��������f1, f2����Դ����ʱ���ӡf1, f2��Constructor���˺�������֮��f1, f2 Destructor;
 * �����������ô��ݣ� ��ô�Ͳ������������Դ�� ֱ��ʹ����һ�㺯������ı�����
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


// program.c
#include <webassembly.h>

export unsigned long factorial(int base) {
  int i;
  unsigned long result = 1;

  if (base < 0) {
    return 0;
  }

  for (i=1; i <= base; ++i) {
    result *= i;
  }

  return result;
}

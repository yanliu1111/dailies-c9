// This is the root (global) scope

function doSomething() {
  // This is a new scope

  if (true) {
    // This is another new scope

    for (let i = 0; i < 5; i++) {
      // This is yet another new scope

      {
        // Even this is a valid new scope
        // Same applies for while loops, switch statements, etc
      }
    }
  }
}

/**
 * Rule of thumb
 * -------------
 * Anytime you open a new set of curly braces {},
 * you have a new scope
 */

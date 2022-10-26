import 'package:flutter/material.dart';
import 'package:flutter/src/widgets/container.dart';
import 'package:flutter/src/widgets/framework.dart';

class Home extends StatelessWidget {
  const Home({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('About me'),
        backgroundColor: Colors.black,
        leading: const Icon(
          Icons.fireplace,
          color: Colors.white,
          size: 40,
        ),
      ),
      body: Column(
        mainAxisAlignment: MainAxisAlignment.end,
        crossAxisAlignment: CrossAxisAlignment.center,
        children: [
          Container(
            color: Colors.red,
            width: 100,
            height: 100,
            child: const Text('TURIP'),
          ),
          Container(
              padding: const EdgeInsets.only(top: 30),
              color: Colors.black,
              width: double.infinity,
              height: 100,
              child: const Text(
                'Copyright @2022',
                style: TextStyle(color: Colors.white),
                textAlign: TextAlign.center,
              )),
        ],
      ),
    );
  }
}
